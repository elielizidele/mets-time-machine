import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { getEraForYear } from "../../data/eras";
import { getSeasonDeepDive } from "../../data/season-deep-dives";
import { getSeason, majorStories, seasons } from "../../data/seasons";

type PageProps = {
  params: Promise<{ year: string }>;
};

function recordNumbers(record: string) {
  const [wins = 0, losses = 0] = record.split("–").map(Number);
  const games = wins + losses;
  return { wins, losses, games, percentage: games ? (wins / games).toFixed(3).replace(/^0/, "") : "—" };
}

function ballparkFor(year: number) {
  if (year <= 1963) return "Polo Grounds";
  if (year <= 2008) return "Shea Stadium";
  return "Citi Field";
}

function seasonType(year: number, result: string, wins: number, losses: number) {
  if (year === 2026) return "This one is still happening. Ask again when the Mets stop giving us new things to worry about.";
  if (result.includes("World Series champions")) return "The Mets won the World Series. There is not much more to explain.";
  if (result.includes("National League champions")) return "They won the pennant and got to the World Series. The parade part did not happen.";
  if (result.includes("Wild Card") || result.includes("NLCS")) return "They made October, which tells you more than the regular-season record does.";
  if (wins > losses) return "A winning record, no playoffs. Good enough to remember and frustrating enough to complain about.";
  if (wins === losses) return "Exactly .500 and nowhere near October. A very Mets kind of season.";
  return "The record was bad, but there were still players and moments worth keeping.";
}

export function generateStaticParams() {
  return seasons.map((season) => ({ year: String(season.year) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { year } = await params;
  const season = getSeason(Number(year));

  return {
    title: season ? `${season.year} Mets Season | The Mets Time Machine` : "Season Not Found",
    description: season
      ? `The ${season.year} Mets: ${season.record}, key players, major moments, and season result.`
      : undefined,
  };
}

export default async function SeasonPage({ params }: PageProps) {
  const { year } = await params;
  const season = getSeason(Number(year));
  if (!season) notFound();

  const story = majorStories[season.year];
  const deepDive = getSeasonDeepDive(season.year);
  const seasonIndex = seasons.findIndex((item) => item.year === season.year);
  const previous = seasons[seasonIndex - 1];
  const next = seasons[seasonIndex + 1];
  const numbers = recordNumbers(season.record);
  const era = getEraForYear(season.year)!;
  const previousNumbers = previous ? recordNumbers(previous.record) : null;
  const winChange = previousNumbers && ![1981, 1994, 1995, 2020, 2026].includes(season.year)
    ? numbers.wins - previousNumbers.wins
    : null;

  return (
    <main className="season-page">
      <SiteHeader active="time-machine" />

      <section className={`season-hero${season.major ? " major" : ""}`}>
        <div className="season-hero-copy">
          <Link className="season-back" href="/time-machine">← All seasons</Link>
          <p className="eyebrow">Destination {season.year}</p>
          <h1>{season.year}</h1>
          <h2>{story?.title ?? season.result}</h2>
          <p>{story?.intro ?? season.moment}</p>
        </div>
        <div className="season-scorecard">
          <div><span>Record</span><strong>{season.record}</strong></div>
          <div><span>Result</span><strong>{season.result}</strong></div>
        </div>
      </section>

      <section className="season-story section-shell">
        <div className="season-story-main">
          <p className="eyebrow dark">Open the file</p>
          <h2>{season.major ? "Why people still talk about it." : "What happened that year."}</h2>

          <div className="season-overview">
            <p>
              The {season.year} Mets played {numbers.games} games and finished with a {season.record} record.
              {' '}{season.moment}
            </p>
            <p>{seasonType(season.year, season.result, numbers.wins, numbers.losses)}</p>
          </div>

          {deepDive && (
            <article className="complete-season-recap">
              <header>
                <span>The full recap</span>
                <h3>How {season.year} actually went.</h3>
              </header>
              {deepDive.chapters.map((paragraph, chapterIndex) => (
                <section key={paragraph}>
                  <span>{String(chapterIndex + 1).padStart(2, "0")}</span>
                  <p>{paragraph}</p>
                </section>
              ))}
              <blockquote>{deepDive.fanTake}</blockquote>
            </article>
          )}

          {story && (
            <div className="deep-season-story">
              <span>The part you remember</span>
              <h3>Why {season.year} still matters.</h3>
              {story.deepSummary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <blockquote>{story.fanTake}</blockquote>
            </div>
          )}

          <div className="season-number-grid" aria-label={`${season.year} season numbers`}>
            <div><span>Wins</span><strong>{numbers.wins}</strong></div>
            <div><span>Losses</span><strong>{numbers.losses}</strong></div>
            <div><span>Win percentage</span><strong>{numbers.percentage}</strong></div>
            <div><span>Home park</span><strong>{ballparkFor(season.year)}</strong></div>
          </div>

          <div className="story-block featured-story-block">
            <span>The moment everybody remembers</span>
            <p>{season.moment}</p>
          </div>
          {story && (
            <>
              <div className="story-block">
                <span>Where it turned</span>
                <p>{story.turningPoint}</p>
              </div>
              <div className="story-block">
                <span>How it ended</span>
                <p>{story.postseason}</p>
              </div>
            </>
          )}

          <div className="story-block">
            <span>Where it fits</span>
            <div>
              <h3>{era.title}</h3>
              <p>{era.text}</p>
            </div>
          </div>

          <div className="story-block">
            <span>Better or worse?</span>
            <p>
              {!previous
                ? "This was the first season in Mets history, so there was no earlier Mets team to compare it with."
                : winChange === null
                  ? `The schedule was not a normal full season, so the ${season.record} record should be read in that context.`
                  : winChange > 0
                    ? `The Mets won ${winChange} more game${winChange === 1 ? "" : "s"} than they did in ${previous.year}.`
                    : winChange < 0
                      ? `The Mets won ${Math.abs(winChange)} fewer game${Math.abs(winChange) === 1 ? "" : "s"} than they did in ${previous.year}.`
                      : `The Mets finished with the same number of wins as they had in ${previous.year}.`}
            </p>
          </div>

          <div className="story-block">
            <span>Then came...</span>
            {next ? (
              <p>
                In {next.year}, the Mets finished {next.record}. {next.moment}
                {' '}<a className="inline-season-link" href={`/time-machine/${next.year}`}>Go to {next.year} →</a>
              </p>
            ) : (
              <p>The next chapter has not happened yet. This is the newest season in the Time Machine.</p>
            )}
          </div>
        </div>
        <aside className="key-players">
          <p>Who mattered</p>
          <ol>
            {season.players.map((player, index) => (
              <li key={player}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{player}</strong><small>Key {season.year} Met</small></div>
              </li>
            ))}
          </ol>
          <div className="season-result-box">
            <span>How it ended</span>
            <strong>{season.result}</strong>
          </div>
          <div className="season-source-links">
            <p>If you want the receipts</p>
            <a href={`https://www.baseball-reference.com/teams/NYM/${season.year}.shtml`} target="_blank" rel="noreferrer">Full season stats ↗</a>
            <a href={`https://en.wikipedia.org/wiki/${season.year}_New_York_Mets_season`} target="_blank" rel="noreferrer">More season history ↗</a>
          </div>
        </aside>
      </section>

      <nav className="season-pager section-shell" aria-label="Previous and next seasons">
        {previous ? <a href={`/time-machine/${previous.year}`}><span>← Previous</span><strong>{previous.year}</strong></a> : <span />}
        <Link className="all-seasons-link" href="/time-machine">All seasons</Link>
        {next ? <a className="next-season" href={`/time-machine/${next.year}`}><span>Next →</span><strong>{next.year}</strong></a> : <span />}
      </nav>

      <SiteFooter />
    </main>
  );
}
