import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { moments } from "../data/moments";
import MomentsExplorer from "./MomentsExplorer";

export const metadata: Metadata = {
  title: "Greatest Games and Moments | The Mets Time Machine",
  description: "The catches, comebacks, collapses, and strange nights that make Mets history impossible to explain quickly.",
};

export default function MomentsPage() {
  return (
    <main className="moments-page" id="top">
      <SiteHeader active="moments" />
      <section className="moments-hero">
        <div>
          <p className="eyebrow">1962 → Today</p>
          <h1>The moments that made being a Mets fan weird.</h1>
          <p>
            The championships, collapses, catches, and nights where you still cannot believe the box score.
          </p>
        </div>
        <div className="moments-hero-number" aria-hidden="true">{moments.length}</div>
      </section>
      <MomentsExplorer />
      <aside className="moments-note">
        <strong>The box score is only the beginning.</strong>
        <p>The score tells you what happened. The story tells you why Mets fans still bring it up.</p>
      </aside>
      <SiteFooter />
    </main>
  );
}
