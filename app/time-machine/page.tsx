import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { metsEras } from "../data/eras";
import { seasons } from "../data/seasons";

export const metadata: Metadata = {
  title: "Every Mets Season | The Mets Time Machine",
  description: "Every Mets season from 1962 through today, including the great years, the ugly years, and everything in between.",
};

export default function TimeMachinePage() {
  return (
    <main className="archive-page" id="top">
      <SiteHeader active="time-machine" />

      <section className="archive-hero">
        <div>
          <p className="eyebrow">1962 → Today</p>
          <h1>Every season, including the ugly ones.</h1>
          <p>
            Pick an era, find a year, and get the record, the stars, the turning point,
            and the part Mets fans still argue about.
          </p>
        </div>
        <div className="archive-count" aria-label="65 seasons in the archive">
          <strong>{seasons.length}</strong>
          <span>seasons</span>
        </div>
      </section>

      <nav className="decade-nav era-nav" aria-label="Jump to an era">
        {metsEras.map((era) => (
          <a href={`#era-${era.start}`} key={era.start}>
            <span>{era.start}–{era.end === 2026 ? "Today" : era.end}</span>
            {era.shortTitle}
          </a>
        ))}
      </nav>

      <details className="year-finder">
        <summary>Jump to a year</summary>
        <div>
          {seasons.map((season) => (
            <a href={`/time-machine/${season.year}`} key={season.year}>{season.year}</a>
          ))}
        </div>
      </details>

      <div className="decade-archive">
        {metsEras.map((era) => {
          const eraSeasons = seasons.filter(
            (season) => season.year >= era.start && season.year <= era.end,
          );

          return (
            <section className="decade-section era-section" id={`era-${era.start}`} key={era.start}>
              <div className="decade-heading">
                <p>{era.start}–{era.end === 2026 ? "Today" : era.end}</p>
                <h2>{era.title}</h2>
                <span>{eraSeasons.length} seasons</span>
                <span className="era-description">{era.text}</span>
              </div>
              <div className="season-list">
                {eraSeasons.map((season) => (
                  <a
                    className={`season-card${season.major ? " major-season" : ""}`}
                    href={`/time-machine/${season.year}`}
                    key={season.year}
                  >
                    <div className="season-year-block">
                      <span>{season.major ? "Major year" : "Season"}</span>
                      <strong>{season.year}</strong>
                    </div>
                    <dl className="season-facts">
                      <div><dt>Record</dt><dd>{season.record}</dd></div>
                      <div><dt>Best players</dt><dd>{season.players.join(" · ")}</dd></div>
                      <div><dt>Major moment</dt><dd>{season.moment}</dd></div>
                      <div><dt>Result</dt><dd>{season.result}</dd></div>
                    </dl>
                    <span className="season-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <SiteFooter />
    </main>
  );
}
