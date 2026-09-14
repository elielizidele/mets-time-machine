"use client";

import { useMemo, useState } from "react";
import { momentCategories, moments, type MomentCategory } from "../data/moments";

type Filter = "all" | MomentCategory;

export default function MomentsExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const visibleMoments = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return moments.filter((moment) => {
      const matchesCategory = filter === "all" || moment.category === filter;
      const searchable = [moment.title, moment.year, moment.categoryLabel, moment.opponent, ...moment.players].join(" ").toLowerCase();
      return matchesCategory && (!normalized || searchable.includes(normalized));
    }).sort((a, b) => new Date(a.date.replace("–5", "")).getTime() - new Date(b.date.replace("–5", "")).getTime());
  }, [filter, query]);

  return (
    <section className="moments-explorer" aria-labelledby="moments-heading">
      <div className="moments-tools">
        <label className="moment-search">
          <span>Find a moment</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a year, player, opponent, or story"
          />
        </label>
        <div className="moment-filters" aria-label="Filter moments">
          {momentCategories.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
              <span>{item.id === "all" ? moments.length : moments.filter((moment) => moment.category === item.id).length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="moments-results-heading">
        <div>
          <p className="eyebrow dark">The fan version</p>
          <h2 id="moments-heading">The stuff you still bring up.</h2>
        </div>
        <p>{visibleMoments.length} {visibleMoments.length === 1 ? "story" : "stories"}</p>
      </div>

      <div className="moment-grid">
        {visibleMoments.map((moment, index) => (
          <article className={`moment-card${index === 0 && filter === "all" ? " moment-card-featured" : ""}`} key={moment.slug}>
            <header className="moment-card-header">
              <div>
                <span className="moment-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="moment-category">{moment.categoryLabel}</span>
              </div>
              <strong>{moment.year}</strong>
            </header>
            <div className="moment-card-body">
              <p className="moment-kicker">{moment.date} · {moment.setting}</p>
              <h3>{moment.title}</h3>
              <p className="moment-hook">{moment.hook}</p>
              <dl className="moment-facts">
                <div><dt>Game</dt><dd>{moment.opponent}</dd></div>
                <div><dt>Score</dt><dd>{moment.score}</dd></div>
                <div><dt>Players</dt><dd>{moment.players.join(" · ")}</dd></div>
              </dl>
              <div className="moment-story">
                {moment.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <aside className="moment-why">
                <span>Why we still talk about it</span>
                <p>{moment.whyItMatters}</p>
              </aside>
              {moment.seasonLink ? <a className="moment-season-link" href={moment.seasonLink}>Visit the {moment.year} season →</a> : null}
            </div>
          </article>
        ))}
      </div>

      {!visibleMoments.length ? (
        <div className="moments-empty">
          <strong>No moments found.</strong>
          <p>Try a different name, year, or category.</p>
          <button type="button" onClick={() => { setFilter("all"); setQuery(""); }}>Show every moment</button>
        </div>
      ) : null}
    </section>
  );
}
