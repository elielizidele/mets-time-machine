type SiteHeaderProps = {
  active?: "time-machine" | "players" | "moments" | "records" | "transactions" | "ballparks" | "roster-builder";
};

export default function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="The Mets Time Machine home">
        <img
          className="brand-logo"
          src="/images/mets-time-machine-logo.png"
          alt="The Mets Time Machine"
        />
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/time-machine" aria-current={active === "time-machine" ? "page" : undefined}>Time Machine</Link>
        <Link href="/players" aria-current={active === "players" ? "page" : undefined}>Players</Link>
        <Link href="/moments" aria-current={active === "moments" ? "page" : undefined}>Moments</Link>
        <Link href="/records" aria-current={active === "records" ? "page" : undefined}>Records</Link>
        <Link href="/transactions" aria-current={active === "transactions" ? "page" : undefined}>Transactions</Link>
        <Link href="/ballparks" aria-current={active === "ballparks" ? "page" : undefined}>Ballparks</Link>
        <Link href="/roster-builder" aria-current={active === "roster-builder" ? "page" : undefined}>Roster Builder</Link>
      </nav>
      <span className="fan-label">Unofficial fan project</span>
    </header>
  );
}
import Link from "next/link";
