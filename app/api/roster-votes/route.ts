import { getStore } from "@netlify/blobs";
import { isEligible, rosterSlots } from "../../data/roster";

export const dynamic = "force-dynamic";

type SubmittedVote = { slotId?: string; playerSlug?: string };
type NormalizedVote = { slotId: string; playerSlug: string; position: string };
type StoredBallot = { votes: NormalizedVote[]; updatedAt: string };
type VoteCount = { position: string; playerSlug: string; votes: number };

const BALLOT_PREFIX = "ballots/";

function voteStore() {
  return getStore({ name: "roster-votes", consistency: "strong" });
}

function databaseError() {
  return "Voting is unavailable right now. Your choices are still saved on this device.";
}

function isStoredBallot(value: unknown): value is StoredBallot {
  if (!value || typeof value !== "object") return false;
  return Array.isArray((value as { votes?: unknown }).votes);
}

async function ballotKeys() {
  const keys: string[] = [];
  for await (const page of voteStore().list({ prefix: BALLOT_PREFIX, paginate: true })) {
    keys.push(...page.blobs.map((blob) => blob.key));
  }
  return keys;
}

async function totalsResponse() {
  const store = voteStore();
  const keys = await ballotKeys();
  const ballots = await Promise.all(
    keys.map((key) => store.get(key, { type: "json" }).catch(() => null)),
  );
  const countsByPlayer = new Map<string, VoteCount>();
  let totalBallots = 0;

  for (const ballot of ballots) {
    if (!isStoredBallot(ballot)) continue;
    totalBallots += 1;

    for (const vote of ballot.votes) {
      if (typeof vote.position !== "string" || typeof vote.playerSlug !== "string") continue;
      const key = `${vote.position}:${vote.playerSlug}`;
      const current = countsByPlayer.get(key);
      if (current) current.votes += 1;
      else countsByPlayer.set(key, { position: vote.position, playerSlug: vote.playerSlug, votes: 1 });
    }
  }

  return { totalBallots, counts: [...countsByPlayer.values()] };
}

export async function GET() {
  try {
    return Response.json(await totalsResponse(), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Unable to load roster votes", error);
    return Response.json({ error: databaseError() }, { status: 503 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { voterId?: string; votes?: SubmittedVote[] };
    const voterId = payload.voterId?.trim() ?? "";
    const submitted = payload.votes ?? [];

    if (!/^[a-zA-Z0-9-]{16,80}$/.test(voterId)) {
      return Response.json({ error: "This ballot needs a valid browser ID." }, { status: 400 });
    }
    if (submitted.length !== rosterSlots.length) {
      return Response.json({ error: "Complete every roster spot before voting." }, { status: 400 });
    }

    const expected = new Map(rosterSlots.map((slot) => [slot.id, slot]));
    const seenSlots = new Set<string>();
    const seenPlayers = new Set<string>();
    const normalized = submitted.map((vote) => {
      const slotId = vote.slotId?.trim() ?? "";
      const playerSlug = vote.playerSlug?.trim() ?? "";
      const slot = expected.get(slotId);

      if (!slot || seenSlots.has(slotId) || !isEligible(playerSlug, slot.position)) {
        throw new Error("INVALID_BALLOT");
      }
      seenSlots.add(slotId);

      if (slot.position !== "MANAGER") {
        if (seenPlayers.has(playerSlug)) throw new Error("DUPLICATE_PLAYER");
        seenPlayers.add(playerSlug);
      }
      return { slotId, playerSlug, position: slot.position };
    });

    await voteStore().setJSON(`${BALLOT_PREFIX}${voterId}`, {
      votes: normalized,
      updatedAt: new Date().toISOString(),
    } satisfies StoredBallot);

    return Response.json({ saved: true, ...(await totalsResponse()) });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_BALLOT") {
      return Response.json({ error: "One or more players are not eligible for those positions." }, { status: 400 });
    }
    if (error instanceof Error && error.message === "DUPLICATE_PLAYER") {
      return Response.json({ error: "A player can only fill one spot on your roster." }, { status: 400 });
    }
    console.error("Unable to save roster ballot", error);
    return Response.json({ error: databaseError() }, { status: 503 });
  }
}
