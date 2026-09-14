import { players } from "./players";
import { getPlayerPeak } from "./player-peaks";

export type RosterPosition =
  | "C"
  | "1B"
  | "2B"
  | "3B"
  | "SS"
  | "LF"
  | "CF"
  | "RF"
  | "DH"
  | "SP"
  | "RP"
  | "BENCH"
  | "MANAGER";

export type RosterSlot = {
  id: string;
  position: RosterPosition;
  label: string;
  section: "lineup" | "rotation" | "bullpen" | "bench" | "manager";
};

export const rosterSlots: RosterSlot[] = [
  { id: "C", position: "C", label: "Catcher", section: "lineup" },
  { id: "1B", position: "1B", label: "First base", section: "lineup" },
  { id: "2B", position: "2B", label: "Second base", section: "lineup" },
  { id: "3B", position: "3B", label: "Third base", section: "lineup" },
  { id: "SS", position: "SS", label: "Shortstop", section: "lineup" },
  { id: "LF", position: "LF", label: "Left field", section: "lineup" },
  { id: "CF", position: "CF", label: "Center field", section: "lineup" },
  { id: "RF", position: "RF", label: "Right field", section: "lineup" },
  { id: "DH", position: "DH", label: "Designated hitter", section: "lineup" },
  ...Array.from({ length: 5 }, (_, index) => ({
    id: `SP${index + 1}`,
    position: "SP" as const,
    label: `Starter ${index + 1}`,
    section: "rotation" as const,
  })),
  ...Array.from({ length: 6 }, (_, index) => ({
    id: `RP${index + 1}`,
    position: "RP" as const,
    label: `Reliever ${index + 1}`,
    section: "bullpen" as const,
  })),
  ...Array.from({ length: 4 }, (_, index) => ({
    id: `BENCH${index + 1}`,
    position: "BENCH" as const,
    label: `Bench ${index + 1}`,
    section: "bench" as const,
  })),
  { id: "MANAGER", position: "MANAGER", label: "Manager", section: "manager" },
];

type Eligibility = Partial<Record<Exclude<RosterPosition, "BENCH" | "MANAGER">, number>>;

type RosterOnlyCandidate = {
  slug: string;
  name: string;
  position: string;
  years: string;
  peakStart: number;
  peakYears: string;
};

// These additional relievers are available in the roster vote even though they
// do not have full profiles on the main Players page.
export const rosterOnlyCandidates: RosterOnlyCandidate[] = [
  { slug: "john-franco", name: "John Franco", position: "Relief pitcher", years: "1990–2001", peakStart: 1990, peakYears: "1990–92" },
  { slug: "billy-wagner", name: "Billy Wagner", position: "Relief pitcher", years: "2006–2008", peakStart: 2006, peakYears: "2006–08" },
  { slug: "edwin-diaz", name: "Edwin Díaz", position: "Relief pitcher", years: "2019–2022, 2024–present", peakStart: 2022, peakYears: "2022–24" },
  { slug: "jeurys-familia", name: "Jeurys Familia", position: "Relief pitcher", years: "2014–2018, 2019, 2021", peakStart: 2015, peakYears: "2015–17" },
  { slug: "francisco-rodriguez", name: "Francisco Rodríguez", position: "Relief pitcher", years: "2009", peakStart: 2009, peakYears: "2009" },
  { slug: "pedro-feliciano", name: "Pedro Feliciano", position: "Relief pitcher", years: "2002–04, 2006–09, 2013", peakStart: 2006, peakYears: "2006–08" },
  { slug: "turk-wendell", name: "Turk Wendell", position: "Relief pitcher", years: "1997–2001", peakStart: 1997, peakYears: "1997–99" },
];

// Percentages come from MLB regular-season games for the Mets. A fielding
// position qualifies at 10% of a hitter's Mets games. Pitchers qualify for SP
// or RP when at least 10% of their Mets pitching appearances came in that role.
export const playerEligibility: Record<string, Eligibility> = {
  "tom-seaver": { SP: 99 },
  "david-wright": { "3B": 99 },
  "dwight-gooden": { SP: 99 },
  "jacob-degrom": { SP: 100 },
  "darryl-strawberry": { RF: 96 },
  "jerry-koosman": { SP: 92 },
  "jose-reyes": { SS: 82 },
  "pete-alonso": { "1B": 93 },
  "edgardo-alfonzo": { "2B": 48, "3B": 47 },
  "sid-fernandez": { SP: 98 },
  "carlos-beltran": { CF: 86, RF: 11 },
  "francisco-lindor": { SS: 99 },
  "mike-piazza": { C: 85 },
  "jon-matlack": { SP: 98 },
  "keith-hernandez": { "1B": 97 },
  "brandon-nimmo": { LF: 42, CF: 52 },
  "howard-johnson": { "3B": 72, SS: 23 },
  "al-leiter": { SP: 100 },
  "jeff-mcneil": { "2B": 63, LF: 24, RF: 13 },
  "david-cone": { SP: 90 },
  "john-stearns": { C: 86 },
  "john-olerud": { "1B": 97 },
  "lee-mazzilli": { "1B": 16, CF: 58 },
  "kevin-mcreynolds": { LF: 96 },
  "dave-magadan": { "1B": 60, "3B": 34 },
  "armando-benitez": { RP: 100 },
  "tug-mcgraw": { RP: 90 },
  "roger-mcdowell": { RP: 99 },
  "mookie-wilson": { LF: 12, CF: 81 },
  "ray-knight": { "3B": 91 },
  "gary-carter": { C: 94 },
  "cleon-jones": { LF: 67, CF: 22 },
  "ed-kranepool": { "1B": 70 },
  "bud-harrelson": { SS: 97 },
  "lenny-dykstra": { CF: 91 },
  "jerry-grote": { C: 95 },
  "michael-conforto": { LF: 34, CF: 19, RF: 44 },
  "rick-reed": { SP: 99 },
  "ron-darling": { SP: 94 },
  "tom-glavine": { SP: 100 },
  "johan-santana": { SP: 100 },
  "ra-dickey": { SP: 97 },
  "jesse-orosco": { RP: 99 },
  "tommie-agee": { CF: 89, RF: 12 },
  "daniel-murphy": { "1B": 21, "2B": 56 },
  "wally-backman": { "2B": 89 },
  "bob-ojeda": { SP: 78, RP: 22 },
  "curtis-granderson": { CF: 20, RF: 75 },
  "matt-harvey": { SP: 95 },
  "mike-hampton": { SP: 100 },
  "john-franco": { RP: 100 },
  "billy-wagner": { RP: 100 },
  "edwin-diaz": { RP: 100 },
  "jeurys-familia": { RP: 100 },
  "francisco-rodriguez": { RP: 100 },
  "pedro-feliciano": { RP: 100 },
  "turk-wendell": { RP: 100 },
};

export const managers = [
  { slug: "manager-casey-stengel", name: "Casey Stengel", note: "The original voice of the Mets" },
  { slug: "manager-gil-hodges", name: "Gil Hodges", note: "Led the 1969 champions" },
  { slug: "manager-yogi-berra", name: "Yogi Berra", note: "Led the 1973 pennant winners" },
  { slug: "manager-davey-johnson", name: "Davey Johnson", note: "Led the 1986 champions" },
  { slug: "manager-bobby-valentine", name: "Bobby Valentine", note: "Led the 2000 pennant winners" },
  { slug: "manager-willie-randolph", name: "Willie Randolph", note: "Led the 2006 division champions" },
  { slug: "manager-terry-collins", name: "Terry Collins", note: "Led the 2015 pennant winners" },
  { slug: "manager-carlos-mendoza", name: "Carlos Mendoza", note: "Led the 2024 run to the NLCS" },
];

const pitcherSlugs = new Set(
  Object.entries(playerEligibility)
    .filter(([, eligibility]) => eligibility.SP || eligibility.RP)
    .map(([slug]) => slug),
);

const rosterOnlyBySlug = new Map(rosterOnlyCandidates.map((candidate) => [candidate.slug, candidate]));
const allRosterCandidates = [
  ...players,
  ...rosterOnlyCandidates,
];

function sortRosterCandidates<T extends { slug: string; rank?: number; peakStart?: number }>(items: T[]) {
  return [...items].sort((a, b) => {
    const aStart = a.peakStart ?? playerPeaksStart(a.slug);
    const bStart = b.peakStart ?? playerPeaksStart(b.slug);
    return aStart - bStart || (a.rank ?? 999) - (b.rank ?? 999);
  });
}

function playerPeaksStart(slug: string) {
  return getPlayerPeak(slug)?.start ?? 9999;
}

export function candidatesForPosition(position: RosterPosition) {
  if (position === "MANAGER") return managers;
  if (position === "BENCH") {
    return sortRosterCandidates(allRosterCandidates.filter((player) => !pitcherSlugs.has(player.slug)));
  }
  if (position === "DH") {
    return sortRosterCandidates(allRosterCandidates.filter((player) => !pitcherSlugs.has(player.slug)));
  }
  return sortRosterCandidates(allRosterCandidates.filter((player) => playerEligibility[player.slug]?.[position] !== undefined));
}

export function isEligible(playerSlug: string, position: RosterPosition) {
  if (position === "MANAGER") return managers.some((manager) => manager.slug === playerSlug);
  if (position === "BENCH" || position === "DH") return !pitcherSlugs.has(playerSlug) && allRosterCandidates.some((player) => player.slug === playerSlug);
  return playerEligibility[playerSlug]?.[position] !== undefined;
}

export function candidateName(slug: string) {
  return players.find((player) => player.slug === slug)?.name
    ?? rosterOnlyBySlug.get(slug)?.name
    ?? managers.find((manager) => manager.slug === slug)?.name
    ?? slug;
}

export const rosterPlayerCount = rosterSlots.filter((slot) => slot.position !== "MANAGER").length;
