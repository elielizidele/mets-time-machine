import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { records } from "../data/records";
import RecordsExplorer from "./RecordsExplorer";

export const metadata: Metadata = {
  title: "Mets Record Book | The Mets Time Machine",
  description: "The Mets career leaders, ridiculous seasons, team records, and October marks worth arguing about.",
};

export default function RecordsPage() {
  return (
    <main className="records-page" id="top">
      <SiteHeader active="records" />
      <section className="records-hero">
        <div>
          <p className="eyebrow">Records through 2025</p>
          <h1>The numbers people still argue about.</h1>
          <p>Career leaders, ridiculous seasons, team highs, and October marks—checked through the end of the 2025 season.</p>
        </div>
        <div className="records-hero-number" aria-hidden="true">{records.length}</div>
      </section>
      <RecordsExplorer />
      <aside className="records-note">
        <strong>A record is never just a number.</strong>
        <p>It belongs to a player, a season, and usually at least one argument between Mets fans.</p>
      </aside>
      <SiteFooter />
    </main>
  );
}
