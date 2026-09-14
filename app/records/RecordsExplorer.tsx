"use client";

import { useMemo, useState } from "react";
import { recordCategories, records, type RecordCategory } from "../data/records";

type Filter = "all" | RecordCategory;

export default function RecordsExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const visibleRecords = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return records.filter((record) => {
      const categoryMatch = filter === "all" || record.category === filter;
      const searchText = [record.stat, record.value, record.holder, record.year, record.note].join(" ").toLowerCase();
      return categoryMatch && (!normalized || searchText.includes(normalized));
    });
  }, [filter, query]);

  return (
    <section className="records-explorer" aria-labelledby="records-heading">
      <div className="records-tools">
        <label className="record-search">
          <span>Find a record</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a player, stat, or year"
          />
        </label>
        <div className="record-filters" aria-label="Filter records">
          {recordCategories.map((item) => (
            <button type="button" key={item.id} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
              {item.label}
              <span>{item.id === "all" ? records.length : records.filter((record) => record.category === item.id).length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="records-results-heading">
        <div>
          <p className="eyebrow dark">The part with receipts</p>
          <h2 id="records-heading">The numbers.</h2>
        </div>
        <p>{visibleRecords.length} records</p>
      </div>

      <div className="record-table-wrap">
        <div className="record-table" role="table" aria-label="Mets records">
          <div className="record-row record-table-head" role="row">
            <span role="columnheader">Record</span>
            <span role="columnheader">Holder</span>
            <span role="columnheader">Value</span>
            <span role="columnheader">Year</span>
            <span role="columnheader">Why it matters</span>
          </div>
          {visibleRecords.map((record, index) => (
            <article className="record-row" role="row" key={`${record.category}-${record.stat}-${record.holder}`}>
              <div role="cell" className="record-stat"><span>{String(index + 1).padStart(2, "0")}</span><strong>{record.stat}</strong></div>
              <div role="cell" className="record-holder"><strong>{record.holder}</strong><small>{record.category === "career" ? "Career leader" : record.category === "single-season" ? "Single season" : record.category === "team" ? "Team mark" : "Postseason mark"}</small></div>
              <div role="cell" className="record-value">{record.value}</div>
              <div role="cell" className="record-year">{record.year}</div>
              <div role="cell" className="record-note">{record.note}</div>
            </article>
          ))}
        </div>
      </div>

      {!visibleRecords.length ? (
        <div className="records-empty">
          <strong>No records found.</strong>
          <p>Try another player, stat, or year.</p>
          <button type="button" onClick={() => { setFilter("all"); setQuery(""); }}>Show every record</button>
        </div>
      ) : null}
    </section>
  );
}
