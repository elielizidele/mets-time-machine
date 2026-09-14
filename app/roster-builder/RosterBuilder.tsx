"use client";

import { useEffect, useMemo, useState } from "react";
import { getPlayerPeak } from "../data/player-peaks";
import { players } from "../data/players";
import {
  candidateName,
  candidatesForPosition,
  managers,
  playerEligibility,
  rosterOnlyCandidates,
  rosterPlayerCount,
  rosterSlots,
  type RosterPosition,
  type RosterSlot,
} from "../data/roster";

type Selections = Record<string, string>;
type VoteCount = { position: string; playerSlug: string; votes: number };
type Totals = { totalBallots: number; counts: VoteCount[] };

const DRAFT_KEY = "mets-time-machine-roster-draft";
const VOTER_KEY = "mets-time-machine-voter-id";
const SUBMITTED_KEY = "mets-time-machine-roster-submitted";

function createVoterId() {
  if (typeof window.crypto?.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  const randomPart = typeof window.crypto?.getRandomValues === "function"
    ? Array.from(window.crypto.getRandomValues(new Uint32Array(4)), (value) => value.toString(36)).join("-")
    : `${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;

  return `voter-${Date.now().toString(36)}-${randomPart}`;
}

const sections: { id: RosterSlot["section"]; title: string; note: string }[] = [
  { id: "lineup", title: "Starting lineup", note: "Eight fielding positions plus designated hitter" },
  { id: "rotation", title: "Five-man rotation", note: "Starting pitchers" },
  { id: "bullpen", title: "Six-man bullpen", note: "Relief pitchers" },
  { id: "bench", title: "Four-player bench", note: "Any position player not already chosen" },
  { id: "manager", title: "Manager", note: "The person running your team" },
];

function formatVotePercent(position: RosterPosition, slug: string, totals: Totals) {
  if (!totals.totalBallots) return "No votes yet";
  const count = totals.counts.find(
    (item) => item.position === position && item.playerSlug === slug,
  )?.votes ?? 0;
  const percentage = (count / totals.totalBallots) * 100;
  const display = percentage > 0 && percentage < 10
    ? percentage.toFixed(1)
    : Math.round(percentage).toString();
  return `${display}% of rosters`;
}

function eligibleNote(position: RosterPosition, slug: string) {
  if (position === "MANAGER") {
    return managers.find((manager) => manager.slug === slug)?.note ?? "Mets manager";
  }
  const player = players.find((item) => item.slug === slug);
  const rosterOnly = rosterOnlyCandidates.find((item) => item.slug === slug);
  if (!player && !rosterOnly) return "";
  if (position === "BENCH") return `${player?.position ?? rosterOnly?.position} · Peak ${getPlayerPeak(slug)?.years ?? rosterOnly?.peakYears}`;
  if (position === "DH") return "Position player · DH is a hitting role";
  const share = playerEligibility[slug]?.[position];
  if (position === "SP" || position === "RP") {
    return share ? `${share}% of Mets pitching appearances as a ${position === "SP" ? "starter" : "reliever"}` : "Eligible Mets reliever";
  }
  return `${share}% of his Mets games at ${position}`;
}

export default function RosterBuilder() {
  const [selections, setSelections] = useState<Selections>({});
  const [activeSlotId, setActiveSlotId] = useState("C");
  const [totals, setTotals] = useState<Totals>({ totalBallots: 0, counts: [] });
  const [voterId, setVoterId] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [message, setMessage] = useState("");

  const activeSlot = rosterSlots.find((slot) => slot.id === activeSlotId) ?? rosterSlots[0];
  const chosenSlugs = useMemo(() => new Set(Object.values(selections)), [selections]);
  const filled = rosterSlots.filter((slot) => selections[slot.id]).length;
  const eligibleCandidates = candidatesForPosition(activeSlot.position);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      let id = window.localStorage.getItem(VOTER_KEY);
      if (!id) {
        id = createVoterId();
        window.localStorage.setItem(VOTER_KEY, id);
      }
      setVoterId(id);
      try {
        const draft = JSON.parse(window.localStorage.getItem(DRAFT_KEY) ?? "{}") as Selections;
        setSelections(draft);
      } catch {
        setSelections({});
      }
      setSubmitted(window.localStorage.getItem(SUBMITTED_KEY) === "yes");
      setHydrated(true);

      fetch("/api/roster-votes", { cache: "no-store" })
        .then(async (response) => {
          const data = await response.json() as Totals & { error?: string };
          if (!response.ok) throw new Error(data.error ?? "Could not load the fan vote.");
          if (!cancelled) setTotals(data);
        })
        .catch(() => {
          if (!cancelled) setMessage("Fan percentages are unavailable right now. You can still build your roster.");
        });
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(DRAFT_KEY, JSON.stringify(selections));
  }, [hydrated, selections]);

  function choosePlayer(slug: string) {
    setSelections((current) => ({ ...current, [activeSlot.id]: slug }));
    setStatus("idle");
    setMessage("");

    const nextSlot = rosterSlots.find(
      (slot) => slot.id !== activeSlot.id && !selections[slot.id],
    );
    if (nextSlot) setActiveSlotId(nextSlot.id);
  }

  function openSlot(slotId: string) {
    setActiveSlotId(slotId);
    if (window.innerWidth <= 1050) {
      window.setTimeout(() => {
        document.getElementById("roster-player-picker")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }

  function clearSlot(slotId: string) {
    setSelections((current) => {
      const next = { ...current };
      delete next[slotId];
      return next;
    });
    setActiveSlotId(slotId);
    setStatus("idle");
  }

  function resetRoster() {
    setSelections({});
    setActiveSlotId("C");
    setStatus("idle");
    setMessage("Your draft was cleared. Your last submitted vote is still counted until you submit a new roster.");
  }

  async function submitRoster() {
    if (filled !== rosterSlots.length || !voterId) {
      setStatus("error");
      setMessage(`Choose all ${rosterSlots.length} spots before submitting.`);
      return;
    }

    setStatus("saving");
    setMessage("");
    try {
      const response = await fetch("/api/roster-votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          voterId,
          votes: rosterSlots.map((slot) => ({ slotId: slot.id, playerSlug: selections[slot.id] })),
        }),
      });
      const data = await response.json() as Totals & { error?: string };
      if (!response.ok) throw new Error(data.error ?? "Your vote could not be saved.");
      setTotals(data);
      setStatus("saved");
      setSubmitted(true);
      window.localStorage.setItem(SUBMITTED_KEY, "yes");
      setMessage("Your roster is in. The fan percentages now include your vote.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Your vote could not be saved.");
    }
  }

  return (
    <>
      <section className="roster-builder-intro">
        <div>
          <p className="eyebrow"><span />Fan vote</p>
          <h1>Build your all-time Mets roster.</h1>
        </div>
        <div className="roster-rule-card">
          <strong>The 10% rule</strong>
          <p>
            A player can only appear at a fielding position where he played at least 10% of his Mets games.
            Pitching roles use Mets pitching appearances. DH is a hitting role, so any position player can qualify.
          </p>
        </div>
      </section>

      <section className="roster-builder-workspace" aria-label="All-time Mets roster builder">
        <div className="roster-ballot">
          <div className="roster-progress">
            <div>
              <span>Your ballot</span>
              <strong>{filled} of {rosterSlots.length} spots filled</strong>
            </div>
            <div className="roster-progress-track" aria-hidden="true">
              <i style={{ width: `${(filled / rosterSlots.length) * 100}%` }} />
            </div>
            <span>{rosterPlayerCount} players + 1 manager</span>
          </div>

          {sections.map((section) => (
            <div className={`roster-group roster-group-${section.id}`} key={section.id}>
              <div className="roster-group-heading">
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.note}</p>
                </div>
              </div>
              <div className="roster-slot-grid">
                {rosterSlots.filter((slot) => slot.section === section.id).map((slot) => {
                  const selectedSlug = selections[slot.id];
                  return (
                    <button
                      className={`roster-pick-slot ${activeSlot.id === slot.id ? "is-active" : ""} ${selectedSlug ? "is-filled" : ""}`}
                      type="button"
                      key={slot.id}
                      onClick={() => openSlot(slot.id)}
                    >
                      <span>{slot.label}</span>
                      <strong>{selectedSlug ? candidateName(selectedSlug) : "Choose a Met"}</strong>
                      <small>
                        {selectedSlug
                          ? formatVotePercent(slot.position, selectedSlug, totals)
                          : "Open player list"}
                      </small>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="roster-submit-bar">
            <div>
              <strong>{filled === rosterSlots.length ? "Your roster is ready." : `${rosterSlots.length - filled} spots left.`}</strong>
              <span>Your draft saves automatically on this device.</span>
            </div>
            <button className="roster-reset" type="button" onClick={resetRoster}>Clear draft</button>
            <button
              className="button button-primary"
              type="button"
              disabled={filled !== rosterSlots.length || status === "saving"}
              onClick={submitRoster}
            >
              {status === "saving" ? "Submitting…" : submitted ? "Update my vote" : "Submit my roster"}
            </button>
          </div>
          {message && <p className={`roster-message roster-message-${status}`} role="status">{message}</p>}
        </div>

        <aside className="roster-picker" id="roster-player-picker" aria-labelledby="roster-picker-heading">
          <div className="roster-picker-heading">
            <div>
              <p>Choosing for</p>
              <h2 id="roster-picker-heading">{activeSlot.label}</h2>
            </div>
            <span>{eligibleCandidates.length} eligible</span>
          </div>
          {selections[activeSlot.id] && (
            <button className="roster-clear-pick" type="button" onClick={() => clearSlot(activeSlot.id)}>
              Remove {candidateName(selections[activeSlot.id])} from this spot
            </button>
          )}
          <div className="roster-candidate-list">
            {eligibleCandidates.map((candidate) => {
              const slug = candidate.slug;
              const isCurrent = selections[activeSlot.id] === slug;
              const isUsed = chosenSlugs.has(slug) && !isCurrent;
              return (
                <button
                  className={isCurrent ? "is-selected" : ""}
                  type="button"
                  key={slug}
                  disabled={isUsed}
                  onClick={() => choosePlayer(slug)}
                >
                  <span className="roster-candidate-mark" aria-hidden="true">
                    {candidate.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                  </span>
                  <span className="roster-candidate-copy">
                    <strong>{candidate.name}</strong>
                    <small>{isUsed ? "Already on your roster" : eligibleNote(activeSlot.position, slug)}</small>
                  </span>
                  <span className="roster-candidate-vote">
                    {formatVotePercent(activeSlot.position, slug, totals)}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="roster-vote-note">
            {totals.totalBallots
              ? `Based on ${totals.totalBallots.toLocaleString()} submitted ${totals.totalBallots === 1 ? "roster" : "rosters"}. Each browser can update its ballot.`
              : "Be among the first fans to submit a roster."}
          </p>
        </aside>
      </section>

      <section className="roster-method">
        <p className="eyebrow dark">How it works</p>
        <h2>Real positions. Real fan percentages.</h2>
        <div>
          <p><strong>Position eligibility</strong> comes from each player’s Mets regular-season appearances. Ten percent is the cutoff—no exceptions.</p>
          <p><strong>Fan percentage</strong> shows how many submitted rosters include that player in the selected role. Multi-position players have a separate result at every position.</p>
          <p><strong>One player, one spot.</strong> Once you choose someone, he is unavailable everywhere else unless you remove him first.</p>
        </div>
        <a href="https://www.mlb.com/mets/stats/all-time-totals" target="_blank" rel="noreferrer">MLB all-time Mets stats ↗</a>
      </section>
    </>
  );
}
