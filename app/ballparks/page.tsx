import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Ballparks and Uniforms | The Mets Time Machine",
  description: "From the Polo Grounds to Citi Field—and from pinstripes to racing stripes and black jerseys—the places and looks that made the Mets feel like the Mets.",
};

const parks = [
  {
    years: "1962–1963",
    name: "Polo Grounds",
    label: "The borrowed home",
    location: "Manhattan",
    seasons: "2 Mets seasons",
    memory: "A bizarre horseshoe, impossible dimensions, and a brand-new team trying to look like it belonged.",
    story: [
      "The Mets did not begin in Queens. They began in the old home of the New York Giants, a stadium that already felt like it belonged to another lifetime. The foul lines were inviting, center field seemed to stretch toward another borough, and the 1962 club somehow made the place feel even stranger.",
      "It was temporary, but it fit those first Mets perfectly: historic, lovable, a little beaten up, and unlike anything else in baseball. By the time the Polo Grounds hosted its final Mets game in 1963, the team had a fan base. What it still needed was a home of its own.",
    ],
    moment: "The first home game in franchise history—and the beginning of National League baseball's return to New York.",
  },
  {
    years: "1964–2008",
    name: "Shea Stadium",
    label: "The loud concrete bowl",
    location: "Flushing, Queens",
    seasons: "45 Mets seasons",
    memory: "Airplanes, ramps, orange foul poles, and a crowd that could make the whole building shake.",
    story: [
      "Shea was never polished. That was part of the point. It sat next to the World's Fair, underneath the flight path to LaGuardia, and looked like a giant circle of blue concrete and orange trim. When the Mets were bad, it could feel enormous. When they were good, the noise had nowhere to escape.",
      "This was where the 1969 miracle became real, where the 1986 team owned New York, where Mike Piazza's post-9/11 home run cleared the wall, and where generations learned the long walk down the ramps after a loss. Shea had flaws. Fans complained about nearly all of them—and missed the place almost immediately.",
    ],
    moment: "Two championships, four pennants, and enough strange afternoons to fill an entire website.",
  },
  {
    years: "2009–Today",
    name: "Citi Field",
    label: "The modern home",
    location: "Flushing, Queens",
    seasons: "Current ballpark",
    memory: "The Jackie Robinson Rotunda, the bridge beyond center, the Apple rising, and October finally arriving in 2015.",
    story: [
      "Citi Field opened as a beautiful ballpark with an identity problem. It borrowed heavily from Ebbets Field, the outfield walls were too far away, and there was not enough Mets history in a place built for the Mets. Over time, the club fixed it: the fences moved, more blue and orange appeared, and the building started telling its own team's story.",
      "Now it feels settled in. The sightlines are closer, the food is part of the experience, and a big Mets moment can make the place every bit as loud as Shea. The 2015 pennant run gave Citi its first real October memories. The next great team gets to add the rest.",
    ],
    moment: "Citi Field's first postseason game came in 2015: a wild 13–7 win over the Dodgers in NLDS Game 3.",
  },
];

const uniforms = [
  { years: "1962–1964", title: "The first pinstripes", className: "uniform-original", text: "The first home jersey had pinstripes and the familiar Mets script, but no number on the front and no name on the back. Dodger blue and Giant orange gave the new club an instant link to New York's National League past." },
  { years: "1965–1977", title: "A number joins the front", className: "uniform-original", text: "The basic look stayed almost untouched. The main change was a number added below the Mets script in 1965. It became the Seaver-era uniform and the look worn for the 1969 miracle." },
  { years: "1978–1982", title: "Pullovers take over", className: "uniform-pullover", text: "Buttons disappeared in 1978. Blue-orange-blue rings were added around the collar and sleeves, and names arrived on the back in 1979. The road uniform added a racing stripe in 1982." },
  { years: "1983–1990", title: "Racing-stripe Mets", className: "uniform-racing", text: "The collar and sleeve rings were replaced by orange-blue-orange stripes running down the sides. It was loud, busy, and perfect for the swaggering 1986 club." },
  { years: "1991–1992", title: "Buttons return", className: "uniform-buttons", text: "The Mets brought back button-down jerseys in 1991, but kept the racing stripes for two more seasons. A thin white outline was also added around the letters and numbers." },
  { years: "1993–1994", title: "The underlined script", className: "uniform-buttons", text: "The racing stripes were finally removed in 1993. The Mets script was changed for the first time, with a long tail placed underneath it. That experiment lasted only two seasons." },
  { years: "1995–1997", title: "Back to the classic look", className: "uniform-reset", text: "The traditional pinstripes and familiar Mets script returned in 1995. An all-white alternate joined the set in 1997, setting up the much busier uniform years that followed." },
  { years: "1998–2012", title: "The black-jersey years", className: "uniform-black", text: "Black became an official team color in 1998, bringing black alternates, caps, and drop shadows. The jerseys stayed in the regular mix through 2011 and were worn only twice in 2012 before disappearing." },
  { years: "2012–2020", title: "The classic reset", className: "uniform-reset", text: "The black drop shadow was removed in 2012 and the club leaned back into blue, orange, cream, and pinstripes. Blue alternates arrived in 2013, and bright white pinstripes returned in 2015." },
  { years: "2021–2024", title: "Black returns, City Connect arrives", className: "uniform-modern", text: "The black alternate returned for Friday home games in 2021. In 2024, the City Connect uniform added concrete gray, 7-train purple, bridge details, and subway symbols." },
  { years: "2025–Today", title: "The road look changes again", className: "uniform-pullover", text: "The gray road uniform gained blue-orange-blue trim in 2025. A blue road pullover brought back the cursive New York script from 1987, while the blue home alternate left the rotation." },
];

const citiChanges = [
  {
    year: "2009",
    title: "Beautiful park, wrong first impression",
    text: "Citi Field opened with black outfield walls, huge gaps and more Brooklyn Dodgers flavor than Mets history. It looked expensive. It did not yet feel fully ours.",
  },
  {
    year: "2010",
    title: "More Mets enters the building",
    text: "The club added more blue, orange, team photos and Mets logos. The home-run line in front of the Apple was also lowered from 16 feet to eight.",
  },
  {
    year: "2012",
    title: "The Great Wall comes down",
    text: "New blue walls moved parts of left and right-center field inward by as much as 12 feet. The eight-foot fence made the park fairer—and made it finally look like a Mets ballpark.",
  },
  {
    year: "2015",
    title: "Right field moves again",
    text: "The right-field and right-center fences came in for a second time. That same season, Citi hosted playoff baseball for the first time and quickly gained the memories it had been missing.",
  },
  {
    year: "2019",
    title: "41 Seaver Way",
    text: "The ballpark’s permanent address changed to honor Tom Seaver. This was not another decoration. It put the Franchise into the actual location of the franchise.",
  },
  {
    year: "2023",
    title: "The giant scoreboard era",
    text: "Right-center moved in roughly eight more feet, a new fan area appeared behind it, and the huge center-field video board changed the view from nearly every seat.",
  },
];

const capHistory = [
  {
    years: "1962–1997",
    title: "Blue cap, orange NY",
    text: "The original cap did almost all the work for 36 seasons. The letters came from the old New York Giants. The colors tied the Giants and Dodgers together. No long explanation was needed.",
  },
  {
    years: "1998–2011",
    title: "Black takes over the closet",
    text: "A two-tone black-and-blue cap arrived with the first black jersey in 1998. An all-black version followed in 1999, and for years the classic blue cap became much harder to find on the field than it should have been.",
  },
  {
    years: "2012–2020",
    title: "The original wins its job back",
    text: "For the 50th anniversary, the Mets removed the black shadows and returned the blue cap with the orange NY to the center of everything. It felt less like a redesign than fixing a mistake.",
  },
  {
    years: "2021–Today",
    title: "Alternates return—with limits",
    text: "The black cap came back with the black jersey. The 2024 City Connect cap went another way entirely, using Queensboro Bridge steelwork instead of the normal NY. The blue cap still remains the one that tells you exactly who the team is.",
  },
];

export default function BallparksPage() {
  return (
    <main className="ballparks-page" id="top">
      <SiteHeader active="ballparks" />

      <section className="ballparks-hero">
        <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Citi_FIeld_Night.jpg/1280px-Citi_FIeld_Night.jpg" alt="Citi Field illuminated for a Mets night game" />
        <div className="ballparks-hero-shade" aria-hidden="true" />
        <div className="ballparks-hero-copy">
          <p className="eyebrow">Three homes · one very recognizable closet</p>
          <h1>Where the Mets lived—and what they wore.</h1>
          <p>The ballparks changed. The uniforms got stripes, lost stripes, turned black, and turned back. Somehow, the blue cap kept the whole thing together.</p>
          <nav className="ballparks-jumps" aria-label="Jump through this page">
            <a href="#ballparks">The ballparks</a>
            <a href="#citi-changes">Citi Field changes</a>
            <a href="#uniforms">Uniform timeline</a>
            <a href="#identity">Logo & caps</a>
            <a href="#apple">Home Run Apple</a>
          </nav>
        </div>
        <a className="ballparks-photo-credit" href="https://commons.wikimedia.org/wiki/File:Citi_FIeld_Night.jpg" target="_blank" rel="noreferrer">Photo: Sam Smith / Wikimedia Commons, public domain</a>
      </section>

      <section className="park-history section-shell" id="ballparks">
        <header className="ballparks-section-heading">
          <div>
            <p className="eyebrow dark">The home-field timeline</p>
            <h2>Manhattan first. Queens ever since.</h2>
          </div>
          <p>The Mets have only called three parks home, but each one belongs to a completely different version of the franchise.</p>
        </header>

        <div className="park-list">
          {parks.map((park, index) => (
            <article className="park-story" key={park.name}>
              <div className="park-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{park.years}</strong>
              </div>
              <div className="park-name">
                <p>{park.label}</p>
                <h3>{park.name}</h3>
                <dl>
                  <div><dt>Location</dt><dd>{park.location}</dd></div>
                  <div><dt>Mets tenure</dt><dd>{park.seasons}</dd></div>
                </dl>
              </div>
              <div className="park-copy">
                {park.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <aside><span>What sticks</span><strong>{park.memory}</strong></aside>
                <div className="park-moment"><span>Defining memory</span><p>{park.moment}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="citi-evolution" id="citi-changes">
        <div className="section-shell">
          <header className="citi-evolution-heading">
            <div>
              <p className="eyebrow">Citi Field did not arrive finished</p>
              <h2>Six changes that made the park feel like home.</h2>
            </div>
            <p>The first version looked like a tribute to every part of New York baseball except the team playing there. The Mets spent years fixing that.</p>
          </header>
          <ol className="citi-change-list">
            {citiChanges.map((change) => (
              <li key={change.year}>
                <strong>{change.year}</strong>
                <div>
                  <h3>{change.title}</h3>
                  <p>{change.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="uniform-history" id="uniforms">
        <div className="section-shell">
          <header className="ballparks-section-heading light-heading">
            <div>
              <p className="eyebrow">The uniform timeline</p>
              <h2>The Mets have never been afraid of a stripe.</h2>
            </div>
            <p>Some looks aged beautifully. Some belong exactly where they are: on a baseball card from the year they happened.</p>
          </header>

          <div className="uniform-grid">
            {uniforms.map((uniform, index) => (
              <article className="uniform-card" key={uniform.years}>
                <div className={`uniform-swatch ${uniform.className}`} aria-hidden="true">
                  <span className="uniform-number">{index + 1}</span>
                  <i />
                </div>
                <div>
                  <p>{uniform.years}</p>
                  <h3>{uniform.title}</h3>
                  <span>{uniform.text}</span>
                </div>
              </article>
            ))}
          </div>

          <article className="city-connect-deep-dive">
            <div className="city-connect-year">2024</div>
            <div>
              <p className="eyebrow">Look closer</p>
              <h3>The City Connect is full of New York clues.</h3>
              <p>The gray comes from the city’s concrete. Purple comes from the 7 train. The thin pinstripes use subway circles and diamonds for local and express trains, while the sleeve patch looks like an old subway token.</p>
              <p>The cap replaces the usual NY with the steelwork of the Queensboro Bridge, and a subway map hides under the brim. Even if the full look is not your favorite, the details were not chosen at random.</p>
            </div>
            <aside>
              <span>Fan question</span>
              <strong>Does a Mets uniform still feel like a Mets uniform without blue and orange doing most of the work?</strong>
            </aside>
          </article>
        </div>
      </section>

      <section className="identity-section section-shell" id="identity">
        <header className="ballparks-section-heading">
          <div>
            <p className="eyebrow dark">Logo and cap history</p>
            <h2>A new team built from old New York.</h2>
          </div>
        </header>
        <div className="identity-grid">
          <article className="identity-feature">
            <div className="cap-illustration" aria-hidden="true"><span>NY</span></div>
            <div>
              <p className="identity-kicker">The cap</p>
              <h3>The “NY” never needed a rebuild.</h3>
              <p>The interlocking letters carried forward the look of the old New York Giants. Put them in orange on a royal-blue cap and the Mets had an identity before they had a winning season. White outlines, black caps, and alternates have come and gone. The original combination still wins.</p>
            </div>
          </article>
          <article className="identity-feature identity-logo-story">
            <div className="roundel-illustration" aria-hidden="true"><span>Mets</span></div>
            <div>
              <p className="identity-kicker">The round logo</p>
              <h3>A skyline, a bridge, and a baseball.</h3>
              <p>Ray Gotto’s original mark packed New York into one circle: the skyline, a bridge, baseball stitching, and the script wordmark. The skyline has been adjusted and tiny details have changed, but the basic idea survived because there was never much reason to replace it.</p>
            </div>
          </article>
        </div>

        <div className="cap-history">
          <div className="cap-history-title">
            <p className="eyebrow dark">Four cap eras</p>
            <h3>The cap tells the shorter version.</h3>
          </div>
          <ol>
            {capHistory.map((cap, index) => (
              <li key={cap.years}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{cap.years}</p>
                  <h4>{cap.title}</h4>
                  <strong>{cap.text}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="black-jersey-section">
        <div className="black-jersey-year" aria-hidden="true">1998</div>
        <div>
          <p className="eyebrow">The alternate that became an argument</p>
          <h2>The black jerseys</h2>
          <p>They arrived during the Piazza era and quickly became part of the team’s most dramatic stretch since 1986. For some fans, black means Piazza home runs, packed Shea nights, and the 2000 pennant. For others, it covered up the blue and orange that made the Mets look like the Mets.</p>
          <p>The jerseys stayed in the regular rotation through 2011, appeared only twice in 2012, and then disappeared. They came back for Friday home games in 2021. The debate returned with them—which is probably proof the jersey mattered.</p>
        </div>
        <aside><span>Fan verdict</span><strong>Not the everyday identity. Absolutely part of the history.</strong></aside>
      </section>

      <section className="apple-section section-shell" id="apple">
        <div className="apple-illustration" aria-hidden="true"><span>HOME<br />RUN</span></div>
        <div>
          <p className="eyebrow dark">The ballpark feature that survived the move</p>
          <h2>The Home Run Apple</h2>
          <p>The original apple began rising out of a top hat beyond Shea’s center-field wall in 1980. It was goofy, oversized, and completely right for the Mets. When Shea closed, leaving it behind would have felt worse than losing a scoreboard.</p>
          <p>Citi Field received a bigger working Apple beyond center. The Shea original now sits outside the Jackie Robinson Rotunda, where it has become a meeting place, photo stop, and reminder that a new park did not have to erase the old one.</p>
          <Link className="button button-primary" href="/time-machine">Keep traveling through Mets history <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <aside className="ballparks-sources">
        <strong>Keep digging</strong>
        <div>
          <a href="https://www.mlb.com/mets/ballpark" target="_blank" rel="noreferrer">Citi Field guide ↗</a>
          <a href="https://ballparkdigest.com/201111024311/major-league-baseball/features/its-official-mets-altering-outfield-fences-for-2012/" target="_blank" rel="noreferrer">Citi Field changes ↗</a>
          <a href="https://www.mlb.com/mets/news/mets-unveil-city-connect-uniforms" target="_blank" rel="noreferrer">City Connect story ↗</a>
          <a href="https://www.amazinavenue.com/2017/5/18/15629086/new-york-mets-home-uniform-history" target="_blank" rel="noreferrer">Uniform history ↗</a>
          <a href="https://www.mlb.com/press-release/press-release-mets-black-jerseys-to-return-friday-july-30-vs-cincinnati-reds" target="_blank" rel="noreferrer">Black jersey history ↗</a>
        </div>
      </aside>

      <SiteFooter />
    </main>
  );
}
