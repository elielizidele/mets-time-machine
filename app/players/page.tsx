import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { players } from "../data/players";
import PlayersExplorer from "./PlayersExplorer";

export const metadata: Metadata = {
  title: "Mets Players | The Mets Time Machine",
  description: "The Mets stars, cult heroes, heartbreakers, and fan favorites—with the stories behind the numbers.",
};

export default function PlayersPage() {
  return (
    <main className="players-page" id="top">
      <SiteHeader active="players" />

      <section className="players-hero">
        <div>
          <p className="eyebrow">1962 → Today</p>
          <h1>{players.length} Mets.<br />A lot of opinions.</h1>
          <p>
            Some were obvious legends. Some had one unbelievable year. Some are here
            because every Mets fan has a story about them. They are ordered by their best
            three-year stretch in a Mets uniform.
          </p>
        </div>
        <div className="players-hero-number" aria-hidden="true">{players.length}</div>
      </section>

      <PlayersExplorer />
      <aside className="players-sources">
        <span>History checked with</span>
        <a href="https://www.mlb.com/mets/history/mets-hall-of-fame" target="_blank" rel="noreferrer">Mets Hall of Fame</a>
        <a href="https://www.mlb.com/mets/history/retired-numbers" target="_blank" rel="noreferrer">Retired Numbers</a>
        <a href="https://www.mlb.com/mets/history/all-stars" target="_blank" rel="noreferrer">Mets All-Stars</a>
      </aside>
      <SiteFooter />
    </main>
  );
}
