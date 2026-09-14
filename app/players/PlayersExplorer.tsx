"use client";

import { useMemo, useState } from "react";
import {
  categoryLabels,
  playerInitials,
  players,
  type PlayerCategory,
} from "../data/players";
import { getPlayerPeak, sortPlayersByPeak } from "../data/player-peaks";

type Filter = "all" | PlayerCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All players" },
  { id: "all-time-great", label: "All-Time Greats" },
  { id: "championship-hero", label: "World Series Champions" },
  { id: "fan-favorite", label: "Fan Favorites" },
  { id: "one-season-wonder", label: "One-Season Wonders" },
  { id: "mets-hall-of-fame", label: "Mets Hall of Fame" },
];

export default function PlayersExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const visiblePlayers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return sortPlayersByPeak(players.filter((player) => {
      const matchesFilter = filter === "all" || player.categories.includes(filter);
      const matchesSearch =
        !query ||
        player.name.toLowerCase().includes(query) ||
        player.position.toLowerCase().includes(query) ||
        player.era.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    }));
  }, [filter, search]);

  return (
    <section className="players-explorer" aria-labelledby="players-heading">
      <div className="players-tools">
        <label className="player-search">
          <span>Find a player</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, position, or era"
          />
        </label>

        <div className="player-filters" aria-label="Filter players">
          {filters.map((item) => {
            const count = item.id === "all"
              ? players.length
              : players.filter((player) => player.categories.includes(item.id as PlayerCategory)).length;

            return (
              <button
                type="button"
                key={item.id}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
                <span>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="player-category-note">
        World Series Champions includes only players from the 1969 and 1986 title teams.
        Mets Hall of Fame follows the team’s official list. One-Season Wonders are players
        whose Mets story is built around one standout year, like Bernard Gilkey’s 1996 season.
      </p>

      <div className="players-results-heading">
        <div>
          <p className="eyebrow dark">The player timeline</p>
          <h2 id="players-heading">
            {filter === "all" ? "Start arguing." : filters.find((item) => item.id === filter)?.label}
          </h2>
        </div>
        <p>{visiblePlayers.length} {visiblePlayers.length === 1 ? "player" : "players"}</p>
      </div>

      {visiblePlayers.length ? (
        <div className="player-grid">
          {visiblePlayers.map((player) => (
            <a className="player-card" href={`/players/${player.slug}`} key={player.slug}>
              <div className="player-card-portrait" aria-hidden="true">
                <span className="player-peak-label">
                  {player.slug === "mike-hampton" ? "Only Mets season" : "Best three-year stretch"}
                  <b>{getPlayerPeak(player.slug).years}</b>
                </span>
                <strong>{playerInitials(player.name)}</strong>
              </div>
              <div className="player-card-copy">
                <p>{player.era}</p>
                <h3>{player.name}</h3>
                <span>{player.position} · {player.years}</span>
                <small>{player.signature}</small>
                <div className="player-card-tags">
                  {player.categories.slice(0, 2).map((category) => (
                    <em key={category}>{categoryLabels[category]}</em>
                  ))}
                </div>
              </div>
              <b aria-hidden="true">→</b>
            </a>
          ))}
        </div>
      ) : (
        <div className="players-empty">
          <strong>No players found.</strong>
          <p>Try another name or choose a different category.</p>
          <button type="button" onClick={() => { setSearch(""); setFilter("all"); }}>
            Show all players
          </button>
        </div>
      )}
    </section>
  );
}
