export type PlayerPeak = {
  start: number;
  years: string;
};

export const playerPeaks: Record<string, PlayerPeak> = {
  "ed-kranepool": { start: 1964, years: "1964–66" },
  "jerry-koosman": { start: 1968, years: "1968–70" },
  "cleon-jones": { start: 1968, years: "1968–70" },
  "jerry-grote": { start: 1968, years: "1968–70" },
  "tom-seaver": { start: 1969, years: "1969–71" },
  "bud-harrelson": { start: 1969, years: "1969–71" },
  "tommie-agee": { start: 1969, years: "1969–71" },
  "tug-mcgraw": { start: 1971, years: "1971–73" },
  "jon-matlack": { start: 1972, years: "1972–74" },
  "john-stearns": { start: 1978, years: "1978–80" },
  "lee-mazzilli": { start: 1978, years: "1978–80" },
  "jesse-orosco": { start: 1983, years: "1983–85" },
  "dwight-gooden": { start: 1984, years: "1984–86" },
  "keith-hernandez": { start: 1984, years: "1984–86" },
  "mookie-wilson": { start: 1984, years: "1984–86" },
  "ron-darling": { start: 1984, years: "1984–86" },
  "wally-backman": { start: 1984, years: "1984–86" },
  "ray-knight": { start: 1984, years: "1984–86" },
  "sid-fernandez": { start: 1985, years: "1985–87" },
  "roger-mcdowell": { start: 1985, years: "1985–87" },
  "gary-carter": { start: 1985, years: "1985–87" },
  "darryl-strawberry": { start: 1986, years: "1986–88" },
  "lenny-dykstra": { start: 1986, years: "1986–88" },
  "bob-ojeda": { start: 1986, years: "1986–88" },
  "kevin-mcreynolds": { start: 1987, years: "1987–89" },
  "david-cone": { start: 1988, years: "1988–90" },
  "howard-johnson": { start: 1989, years: "1989–91" },
  "dave-magadan": { start: 1989, years: "1989–91" },
  "john-olerud": { start: 1997, years: "1997–99" },
  "rick-reed": { start: 1997, years: "1997–99" },
  "edgardo-alfonzo": { start: 1998, years: "1998–2000" },
  "mike-piazza": { start: 1998, years: "1998–2000" },
  "al-leiter": { start: 1998, years: "1998–2000" },
  "armando-benitez": { start: 1999, years: "1999–2001" },
  "mike-hampton": { start: 2000, years: "2000" },
  "tom-glavine": { start: 2005, years: "2005–07" },
  "david-wright": { start: 2006, years: "2006–08" },
  "jose-reyes": { start: 2006, years: "2006–08" },
  "carlos-beltran": { start: 2006, years: "2006–08" },
  "johan-santana": { start: 2008, years: "2008–10" },
  "ra-dickey": { start: 2010, years: "2010–12" },
  "matt-harvey": { start: 2012, years: "2012–15" },
  "daniel-murphy": { start: 2013, years: "2013–15" },
  "curtis-granderson": { start: 2014, years: "2014–16" },
  "michael-conforto": { start: 2017, years: "2017–19" },
  "jacob-degrom": { start: 2018, years: "2018–20" },
  "jeff-mcneil": { start: 2018, years: "2018–20" },
  "pete-alonso": { start: 2019, years: "2019–21" },
  "francisco-lindor": { start: 2022, years: "2022–24" },
  "brandon-nimmo": { start: 2022, years: "2022–24" },
  "bernard-gilkey": { start: 1996, years: "1996–98" },
  "lance-johnson": { start: 1996, years: "1996–98" },
  "robin-ventura": { start: 1999, years: "1999–2001" },
  "juan-soto": { start: 2025, years: "2025–present" },
  "angel-pagan": { start: 2010, years: "2010–12" },
  "juan-lagares": { start: 2013, years: "2013–15" },
  "todd-hundley": { start: 1995, years: "1995–97" },
  "pedro-martinez": { start: 2005, years: "2005–07" },
  "frank-viola": { start: 1990, years: "1990–92" },
  "craig-swan": { start: 1978, years: "1978–80" },
  "bret-saberhagen": { start: 1992, years: "1992–94" },
  "max-scherzer": { start: 2022, years: "2022–23" },
  "noah-syndergaard": { start: 2015, years: "2015–17" },
  "steve-trachsel": { start: 2001, years: "2001–03" },
  "john-franco": { start: 1990, years: "1990–92" },
  "edwin-diaz": { start: 2020, years: "2020–22" },
  "randy-myers": { start: 1987, years: "1987–89" },
  "wayne-garrett": { start: 1972, years: "1972–74" },
  "john-milner": { start: 1972, years: "1972–74" },
  "carlos-delgado": { start: 2006, years: "2006–08" },
  "al-weis": { start: 1968, years: "1968–70" },
  "kevin-mitchell": { start: 1984, years: "1984–86" },
  "donn-clendenon": { start: 1969, years: "1969–71" },
};

export function getPlayerPeak(slug: string) {
  return playerPeaks[slug];
}

export function sortPlayersByPeak<T extends { slug: string; rank: number }>(items: T[]) {
  return [...items].sort((a, b) => {
    const startDifference = playerPeaks[a.slug].start - playerPeaks[b.slug].start;
    return startDifference || a.rank - b.rank;
  });
}
