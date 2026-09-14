import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <img className="footer-logo" src="/images/mets-time-machine-logo.png" alt="The Mets Time Machine" />
      </div>
      <p>
        Created by Eli as a portfolio project and unofficial Mets fan archive. It is not connected
        to the New York Mets or Major League Baseball.
      </p>
      <div className="footer-links">
        <Link href="/#about">About</Link>
        <Link href="/">Home ↑</Link>
      </div>
    </footer>
  );
}
