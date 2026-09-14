import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import RosterBuilder from "./RosterBuilder";

export const metadata: Metadata = {
  title: "Build Your All-Time Mets Roster | The Mets Time Machine",
  description: "Choose an all-time Mets lineup, DH, rotation, bullpen, bench, and manager—then see how other fans voted.",
};

export default function RosterBuilderPage() {
  return (
    <main className="roster-builder-page" id="top">
      <SiteHeader active="roster-builder" />
      <RosterBuilder />
      <SiteFooter />
    </main>
  );
}
