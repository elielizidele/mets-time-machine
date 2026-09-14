import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { transactions } from "../data/transactions";
import TransactionsExplorer from "./TransactionsExplorer";

export const metadata: Metadata = {
  title: "Notable Mets Transactions | The Mets Time Machine",
  description: "The trades, signings, and front-office decisions that changed what the Mets became next.",
};

export default function TransactionsPage() {
  return (
    <main className="transactions-page" id="top">
      <SiteHeader active="transactions" />
      <section className="transactions-hero">
        <div>
          <p className="eyebrow">Trades · signings · turning points</p>
          <h1>The moves Mets fans still talk about.</h1>
          <p>Some deals built champions. Some wrecked the team. Some looked smart until they very clearly did not.</p>
        </div>
        <div className="transactions-hero-number" aria-hidden="true">{transactions.length}</div>
      </section>
      <TransactionsExplorer />
      <aside className="transactions-note"><strong>Every move has a before and after.</strong><p>The trade is the easy part. The fun is seeing what it did to the team—and how fans felt about it at the time.</p></aside>
      <SiteFooter />
    </main>
  );
}
