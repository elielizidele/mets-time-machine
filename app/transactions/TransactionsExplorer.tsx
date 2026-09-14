"use client";

import { useMemo, useState } from "react";
import { transactionCategories, transactions, type TransactionCategory } from "../data/transactions";

type Filter = "all" | TransactionCategory;

export default function TransactionsExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const visibleTransactions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return transactions.filter((transaction) => {
      const categoryMatch = filter === "all" || transaction.category === filter;
      const searchText = [transaction.title, transaction.move, transaction.result, transaction.year, ...transaction.involved].join(" ").toLowerCase();
      return categoryMatch && (!normalized || searchText.includes(normalized));
    });
  }, [filter, query]);

  return (
    <section className="transactions-explorer" aria-labelledby="transactions-heading">
      <div className="transactions-tools">
        <label className="transaction-search">
          <span>Find a move</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a player, year, or move" />
        </label>
        <div className="transaction-filters" aria-label="Filter transactions">
          {transactionCategories.map((item) => (
            <button type="button" key={item.id} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
              {item.label}
              <span>{item.id === "all" ? transactions.length : transactions.filter((transaction) => transaction.category === item.id).length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="transactions-results-heading">
        <div>
          <p className="eyebrow dark">Before and after</p>
          <h2 id="transactions-heading">This is where the story turns.</h2>
        </div>
        <p>{visibleTransactions.length} stories</p>
      </div>

      <div className="transaction-grid">
        {visibleTransactions.map((transaction, index) => (
          <article className="transaction-card" key={transaction.slug}>
            <header>
              <div><span>{String(index + 1).padStart(2, "0")}</span><small>{transaction.categoryLabel}</small></div>
              <strong>{transaction.year}</strong>
            </header>
            <div className="transaction-card-body">
              <h3>{transaction.title}</h3>
              <p className="transaction-move"><b>What happened:</b> {transaction.move}</p>
              <p className="transaction-result"><b>What came next:</b> {transaction.result}</p>
              <div className="transaction-people"><span>The names in it</span><strong>{transaction.involved.join(" · ")}</strong></div>
              <div className="transaction-story">{transaction.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <aside><span>Mets fan verdict</span><p>{transaction.fanVerdict}</p></aside>
              {transaction.link ? <a href={transaction.link}>Visit the {transaction.year} season →</a> : null}
            </div>
          </article>
        ))}
      </div>

      {!visibleTransactions.length ? (
        <div className="transactions-empty"><strong>No moves found.</strong><p>Try another player, year, or category.</p><button type="button" onClick={() => { setFilter("all"); setQuery(""); }}>Show every move</button></div>
      ) : null}
    </section>
  );
}
