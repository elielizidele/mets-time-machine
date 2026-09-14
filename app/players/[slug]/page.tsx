import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { getPlayerDeepDive } from "../../data/player-deep-dives";
import { getPlayerFanNote } from "../../data/player-fan-notes";
import { getPlayerPeak, sortPlayersByPeak } from "../../data/player-peaks";
import { getPlayerStoryChapters } from "../../data/player-story-chapters";
import {
  categoryLabels,
  getPlayer,
  playerInitials,
  players,
} from "../../data/players";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return players.map((player) => ({ slug: player.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const player = getPlayer(slug);

  return {
    title: player ? `${player.name} | The Mets Time Machine` : "Player Not Found",
    description: player ? `${player.name}'s Mets story, career highlights, and place in franchise history.` : undefined,
  };
}

export default async function PlayerProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const player = getPlayer(slug);
  if (!player) notFound();

  const chronologicalPlayers = sortPlayersByPeak(players);
  const index = chronologicalPlayers.findIndex((item) => item.slug === player.slug);
  const previous = index > 0 ? chronologicalPlayers[index - 1] : undefined;
  const next = index < chronologicalPlayers.length - 1 ? chronologicalPlayers[index + 1] : undefined;
  const fanNote = getPlayerFanNote(player.slug);
  const peak = getPlayerPeak(player.slug);
  const storyChapters = getPlayerStoryChapters(player.slug);
  const deepDive = getPlayerDeepDive(player.slug);
  const deepDiveTitles = [
    "The best stretch",
    "The part that got messy",
    "Why fans still care",
  ];

  return (
    <main className="player-profile-page" id="top">
      <SiteHeader active="players" />

      <section className="player-profile-hero">
        <div className="profile-rank">
          <span>{player.slug === "mike-hampton" ? "Only Mets season" : "Best three-year stretch"}</span>
          <strong>{peak.years}</strong>
        </div>
        <div className="profile-title">
          <p className="eyebrow">{player.era}</p>
          <h1>{player.name}</h1>
          <p>{player.position} · Mets {player.years}</p>
        </div>
        <div className="profile-initials" aria-hidden="true">{playerInitials(player.name)}</div>
      </section>

      <section className="profile-story">
        <div className="profile-main-copy">
          <p className="eyebrow dark">The part fans remember</p>
          <h2>What the numbers leave out.</h2>
          <div className="player-story-copy">
            <p className="player-story-intro">{player.summary}</p>
            {storyChapters.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="player-deep-dive">
            <p className="eyebrow dark">The honest version</p>
            {deepDive.map((paragraph, chapterIndex) => (
              <section key={paragraph}>
                <span>{String(chapterIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{deepDiveTitles[chapterIndex]}</h3>
                  <p>{paragraph}</p>
                </div>
              </section>
            ))}
          </div>

          {fanNote && (
            <div className="player-fan-take">
              <span>How Mets fans remember it</span>
              <p>{fanNote}</p>
            </div>
          )}

          <blockquote>
            <span>Signature Mets moment</span>
            <p>{player.signature}</p>
          </blockquote>
        </div>

        <aside className="profile-facts">
          <p className="eyebrow">Career snapshot</p>
          <dl>
            <div><dt>Position</dt><dd>{player.position}</dd></div>
            <div><dt>Mets years</dt><dd>{player.years}</dd></div>
            <div><dt>Era</dt><dd>{player.era}</dd></div>
          </dl>
          <div className="profile-tags">
            {player.categories.map((category) => (
              <span key={category}>{categoryLabels[category]}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="profile-highlights">
        <div>
          <p className="eyebrow dark">The short list</p>
          <h2>The stuff worth remembering.</h2>
        </div>
        <ol>
          {player.highlights.map((highlight, highlightIndex) => (
            <li key={highlight}>
              <span>{String(highlightIndex + 1).padStart(2, "0")}</span>
              <strong>{highlight}</strong>
            </li>
          ))}
        </ol>
      </section>

      <nav className="player-pager" aria-label="Player profiles">
        {previous ? (
          <a href={`/players/${previous.slug}`}>
            <span>Previous player</span>
            <strong>← {previous.name}</strong>
          </a>
        ) : <span />}
        <Link className="all-players-link" href="/players">All players</Link>
        {next ? (
          <a className="next-player" href={`/players/${next.slug}`}>
            <span>Next player</span>
            <strong>{next.name} →</strong>
          </a>
        ) : <span />}
      </nav>

      <SiteFooter />
    </main>
  );
}
