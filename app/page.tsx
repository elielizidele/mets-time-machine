"use client";

import { useState } from "react";
import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

type Era = {
  year: string;
  label: string;
  location: string;
  record: string;
  finish: string;
  result: string;
  description: string;
};

const eras: Era[] = [
  {
    year: "1962",
    label: "The Beginning",
    location: "Polo Grounds",
    record: "40–120",
    finish: "10th in NL",
    result: "First season",
    description:
      "The Mets were terrible—40–120 terrible—but New York finally had an NL team again, and people showed up anyway.",
  },
  {
    year: "1969",
    label: "The Miracle",
    location: "Shea Stadium",
    record: "100–62",
    finish: "1st in NL East",
    result: "World Champions",
    description:
      "Seven years after losing 120 games, the Mets took down the Cubs, Baltimore, and every prediction in between.",
  },
  {
    year: "1973",
    label: "Ya Gotta Believe",
    location: "Shea Stadium",
    record: "82–79",
    finish: "1st in NL East",
    result: "NL Champions",
    description:
      "They were in last place in August, then somehow won the pennant. ‘Ya Gotta Believe’ stopped sounding like a slogan.",
  },
  {
    year: "1986",
    label: "The Dream Season",
    location: "Shea Stadium",
    record: "108–54",
    finish: "1st in NL East",
    result: "World Champions",
    description:
      "They won 108 games, argued with each other, terrified opponents, and needed the craziest Game 6 comeback to win it all.",
  },
  {
    year: "2000",
    label: "Subway Series",
    location: "Shea Stadium",
    record: "94–68",
    finish: "Wild Card",
    result: "NL Champions",
    description:
      "Piazza, Alfonzo, Leiter, and a roster that refused to go away brought the Mets back to the World Series—and into a Subway Series.",
  },
  {
    year: "2015",
    label: "The Pennant Run",
    location: "Citi Field",
    record: "90–72",
    finish: "1st in NL East",
    result: "NL Champions",
    description:
      "The lineup was asleep until Yoenis Céspedes showed up. Then Murphy got hot, the pitching held, and the Mets were suddenly in the World Series.",
  },
];

const previews = [
  {
    number: "01",
    title: "Time Machine",
    text: "Every year, including the ugly ones. Pick a season and see what actually happened.",
    href: "/time-machine",
  },
  {
    number: "02",
    title: "Mets Legends",
    text: "The stars, the cult heroes, the heartbreakers, and the guys Mets fans still argue about.",
    href: "/players",
  },
  {
    number: "03",
    title: "Moments & Records",
    text: "The catches, collapses, comebacks, and weirdness you cannot explain to non-Mets fans.",
    href: "/moments",
  },
  {
    number: "04",
    title: "Build a Roster",
    text: "Build the team you wish the front office had built.",
    href: "/roster-builder",
  },
];

const collections = [
  ["How It Began", "A brand-new team, a terrible first season, and a fan base that showed up anyway.", "/time-machine/1962"],
  ["Mets Firsts", "The first win, first homer, first no-hitter—and the first time the Mets made history by accident.", "/moments"],
  ["Strangest Moments", "The stuff that sounds made up until you check the box score.", "/moments"],
  ["Trades & Signings", "The deals that made fans celebrate, panic, or ask what the front office was thinking.", "/transactions"],
  ["Player Profiles", "The careers, peaks, injuries, and moments people still bring up.", "/players"],
  ["Awards & Honors", "The numbers, plaques, and honors that show who actually mattered.", "/records"],
  ["Ballparks & Uniforms", "Polo Grounds, Shea, Citi, racing stripes, black jerseys, and the Apple.", "/ballparks"],
];

export default function Home() {
  const [selectedYear, setSelectedYear] = useState("1986");
  const selectedEra =
    eras.find((era) => era.year === selectedYear) ?? eras[3];
  const selectedStop = String(
    eras.findIndex((era) => era.year === selectedEra.year) + 1,
  ).padStart(2, "0");

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <img
          className="hero-art"
          src="/images/time-portal-hero.webp"
          alt="A blue and orange time portal opening above a nighttime baseball stadium"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow" key={`${selectedEra.year}-eyebrow`}>
            Destination {selectedStop} <span /> {selectedEra.year} · {selectedEra.location}
          </p>
          <h1>
            The Mets
            <span>Time Machine</span>
          </h1>
          <p className="hero-intro season-change" key={selectedEra.year} aria-live="polite">
            <strong>{selectedEra.label}.</strong> {selectedEra.description}
          </p>
          <div className="hero-season-facts" aria-label={`${selectedEra.year} season facts`}>
            <span><small>Record</small>{selectedEra.record}</span>
            <span><small>Finish</small>{selectedEra.finish}</span>
            <span><small>Result</small>{selectedEra.result}</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href={`/time-machine/${selectedEra.year}`}>
              Step into {selectedEra.year} <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#routes">
              See what else is here
            </a>
          </div>
        </div>

        <div className="dial-wrap">
          <p className="dial-instruction">Pick a year</p>
          <div className="time-dial" role="group" aria-label="Choose a featured Mets season">
            <div className="dial-orbit orbit-one" aria-hidden="true" />
            <div className="dial-orbit orbit-two" aria-hidden="true" />
            {eras.map((era, index) => (
              <button
                className={`dial-year dial-year-${index + 1}`}
                type="button"
                key={era.year}
                onClick={() => setSelectedYear(era.year)}
                aria-pressed={selectedYear === era.year}
                aria-label={`Travel to the ${era.year} Mets season`}
              >
                {era.year}
              </button>
            ))}
            <div className="dial-center" aria-live="polite">
              <span>Destination</span>
              <strong>{selectedEra.year}</strong>
              <small>{selectedEra.label}</small>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>Est. 1962</span>
          <span>5 National League pennants</span>
          <span>2 World championships</span>
        </div>
      </section>

      <section className="intro-section section-shell" id="routes">
        <div className="section-heading">
          <p className="eyebrow dark">Pick your route</p>
          <h2>More than a timeline.</h2>
          <p>
            Start with a year, a player, a game, or one of the decisions that made Mets history so strange.
          </p>
        </div>
        <div className="preview-grid">
          {previews.map((preview) => (
            <a className="preview-card" href={preview.href} key={preview.title}>
              <span className="preview-number">{preview.number}</span>
              <h3>{preview.title}</h3>
              <p>{preview.text}</p>
              <span className="card-link">Take a look <b aria-hidden="true">→</b></span>
            </a>
          ))}
        </div>
      </section>

      <section className="featured-stop" id="featured-stop">
        <div className="featured-year" aria-hidden="true">{selectedEra.year}</div>
        <div className="featured-copy">
          <p className="eyebrow">Featured stop</p>
          <h2>{selectedEra.label}</h2>
          <p>{selectedEra.description}</p>
          <a className="button button-light" href={`/time-machine/${selectedEra.year}`}>
            Go to {selectedEra.year} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="featured-stats" aria-label={`${selectedEra.year} season summary`}>
          <div><span>Record</span><strong>{selectedEra.record}</strong></div>
          <div><span>Finish</span><strong>{selectedEra.finish}</strong></div>
          <div><span>Result</span><strong>{selectedEra.result}</strong></div>
        </div>
      </section>

      <section className="explore-section section-shell" id="archive">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark">Inside the archive</p>
            <h2>Every side of the story.</h2>
          </div>
          <p>
            Some pages are about the good stuff. Others are about the trades,
            collapses, and decisions that still make fans angry.
          </p>
        </div>
        <div className="collection-list">
          {collections.map(([title, text, href], index) => (
            <a className="collection-item" href={href} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="legend-section" id="legends">
        <div className="legend-number" aria-hidden="true">41</div>
        <div className="legend-copy">
          <p className="eyebrow">Featured legend</p>
          <h2>Tom Seaver</h2>
          <p>
            Seaver was the first great Met—and the reason the franchise started
            to believe it could become something. The player
            pages tell his story, along with Wright, Doc, deGrom, Strawberry,
            and the names you selected.
          </p>
          <Link
            className="button button-outline-light"
            href="/players"
          >
            See the player list <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="legend-stats">
          <span>Tom Seaver as a Met</span>
          <div><strong>198</strong><small>Wins</small></div>
          <div><strong>2.57</strong><small>ERA</small></div>
          <div><strong>2,541</strong><small>Strikeouts</small></div>
        </div>
      </section>

      <section className="roster-section section-shell" id="roster-builder">
        <div className="roster-copy">
          <p className="eyebrow dark">Interactive feature</p>
          <h2>Build your all-time Mets roster.</h2>
          <p>
            Pick the lineup, rotation, bullpen, bench, and manager. Then see if your
            team is actually better than the ones the Mets gave us.
          </p>
          <a
            className="button button-primary"
            href="/roster-builder"
          >
            Build the team <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="lineup-board" aria-label="Sample all-time Mets lineup card">
          <div className="lineup-title"><span>Lineup card</span><strong>YOUR TEAM</strong></div>
          {["C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"].map((position, index) => (
            <div className="lineup-slot" key={position}>
              <span>{index + 1}</span><strong>{position}</strong><em>Choose a player</em>
            </div>
          ))}
        </div>
      </section>

      <section className="about-project section-shell" id="about">
        <div className="about-project-copy">
          <p className="eyebrow dark">About this project</p>
          <h2>Built by a Mets fan, for Mets fans.</h2>
          <p>
            The Mets Time Machine started as a portfolio project by Eli and grew into a place
            for the seasons, players, games, and front-office decisions that people still argue
            about. The goal is simple: tell Mets history with facts, detail, and an actual point
            of view—not like a team press release.
          </p>
          <p>
            This is an unofficial fan project. It is not connected to the New York Mets or
            Major League Baseball.
          </p>
        </div>

        <div className="project-sources" aria-labelledby="sources-title">
          <p className="eyebrow dark">Sources &amp; credits</p>
          <h3 id="sources-title">Where the facts came from.</h3>
          <p>
            Records, statistics, rosters, awards, and season results were checked against the
            sources below. Each season page also links to more reading.
          </p>
          <div className="source-links">
            <a href="https://www.mlb.com/mets/history" target="_blank" rel="noreferrer">
              MLB Mets history <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.baseball-reference.com/teams/NYM/" target="_blank" rel="noreferrer">
              Baseball-Reference <span aria-hidden="true">↗</span>
            </a>
            <a href="https://commons.wikimedia.org/wiki/File:Citi_FIeld_Night.jpg" target="_blank" rel="noreferrer">
              Citi Field photo credit <span aria-hidden="true">↗</span>
            </a>
          </div>
          <small>
            The Citi Field photo is public domain through Wikimedia Commons. The logo and main
            time-machine artwork were created for this project.
          </small>
        </div>
      </section>

      <SiteFooter />

    </main>
  );
}
