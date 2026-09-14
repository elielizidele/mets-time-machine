export type MetsEra = {
  start: number;
  end: number;
  title: string;
  shortTitle: string;
  text: string;
};

export const metsEras: MetsEra[] = [
  {
    start: 1962,
    end: 1966,
    title: "The Expansion Years",
    shortTitle: "Expansion",
    text: "The Mets were losing constantly, Casey Stengel was making jokes, and New York still showed up. The personality came before the winning.",
  },
  {
    start: 1967,
    end: 1976,
    title: "Seaver, the Miracle, and Two Pennants",
    shortTitle: "Seaver & the Miracle",
    text: "Seaver, Koosman, Matlack, and a stubborn group of hitters turned the Mets from a punchline into a champion—and nearly did it twice.",
  },
  {
    start: 1977,
    end: 1983,
    title: "The Rebuilding Years",
    shortTitle: "Rebuilding",
    text: "After the Seaver trade, the Mets spent years making bad teams feel even worse. Mazzilli, Stearns, and a few young pitchers gave fans reasons to keep watching.",
  },
  {
    start: 1984,
    end: 1990,
    title: "The Mets Powerhouse",
    shortTitle: "The Powerhouse",
    text: "Gooden, Strawberry, Keith, Carter, and a deep roster made the Mets loud, talented, and miserable to play against. They won 108 games and the 1986 World Series.",
  },
  {
    start: 1991,
    end: 1996,
    title: "A Difficult Reset",
    shortTitle: "The Reset",
    text: "The powerhouse disappeared faster than anyone expected. There were expensive mistakes, losing seasons, and a lot of searching for the next good idea.",
  },
  {
    start: 1997,
    end: 2001,
    title: "Piazza, Alfonzo, and the Return to October",
    shortTitle: "Piazza & Alfonzo",
    text: "Piazza made the lineup matter again, Alfonzo did everything, and the Mets finally returned to October. The reward was a pennant and a Subway Series.",
  },
  {
    start: 2002,
    end: 2008,
    title: "Wright, Reyes, and Beltran",
    shortTitle: "Wright, Reyes & Beltran",
    text: "Wright, Reyes, Beltrán, and a loaded roster made Shea feel young again. Then a collapse, injuries, and one brutal curveball kept the era from getting a pennant.",
  },
  {
    start: 2009,
    end: 2014,
    title: "A New Home and Another Rebuild",
    shortTitle: "A New Home",
    text: "Citi Field opened, the injuries arrived, and the Mets spent a few years trying to figure out what they were. Dickey and Santana gave fans something to hold onto.",
  },
  {
    start: 2015,
    end: 2020,
    title: "Young Pitching and a Pennant",
    shortTitle: "Young Pitching",
    text: "Harvey, deGrom, Syndergaard, and Matz gave the Mets a rotation worth getting excited about. Céspedes showed up, Murphy went crazy, and the team won the 2015 pennant.",
  },
  {
    start: 2021,
    end: 2026,
    title: "Steve Cohen and Lindor",
    shortTitle: "Cohen & Lindor",
    text: "Cohen brought the spending, Lindor became the face, Díaz brought the trumpet, and the expectations got much louder. The next championship is still the part nobody has solved.",
  },
];

export function getEraForYear(year: number) {
  return metsEras.find((era) => year >= era.start && year <= era.end);
}
