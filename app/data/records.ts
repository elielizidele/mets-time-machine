export type RecordCategory = "career" | "single-season" | "team" | "postseason";

export type MetsRecord = {
  category: RecordCategory;
  stat: string;
  value: string;
  holder: string;
  year: string;
  note: string;
};

export const recordCategories: { id: "all" | RecordCategory; label: string }[] = [
  { id: "all", label: "All records" },
  { id: "career", label: "Career leaders" },
  { id: "single-season", label: "Single-season" },
  { id: "team", label: "Team records" },
  { id: "postseason", label: "Postseason" },
];

export const records: MetsRecord[] = [
  { category: "career", stat: "Hits", value: "1,777", holder: "David Wright", year: "2004–2018", note: "The captain finished his career as the franchise leader in hits." },
  { category: "career", stat: "Home runs", value: "264", holder: "Pete Alonso", year: "2019–2025", note: "Alonso passed Darryl Strawberry in August 2025 and finished his Mets career with 264 home runs." },
  { category: "career", stat: "Runs batted in", value: "970", holder: "David Wright", year: "2004–2018", note: "Wright drove in more runs than any other Met, even with injuries cutting his career short." },
  { category: "career", stat: "Runs", value: "949", holder: "David Wright", year: "2004–2018", note: "His power, patience, and steady presence made him the club’s top run scorer." },
  { category: "career", stat: "Stolen bases", value: "408", holder: "José Reyes", year: "2003–2011, 2016–2018", note: "Reyes turned speed into a central part of the Mets’ identity in the 2000s." },
  { category: "career", stat: "Wins", value: "198", holder: "Tom Seaver", year: "1967–1977, 1983", note: "The Franchise won more games in a Mets uniform than anyone else." },
  { category: "career", stat: "Strikeouts", value: "2,541", holder: "Tom Seaver", year: "1967–1977, 1983", note: "Seaver’s fastball and late-breaking slider produced a record that still feels enormous." },
  { category: "career", stat: "Saves", value: "276", holder: "John Franco", year: "1990–2001, 2003–2004", note: "Franco became the steady left-handed closer and clubhouse voice of the 1990s." },
  { category: "career", stat: "Games caught", value: "1,176", holder: "Jerry Grote", year: "1966–1977", note: "Grote’s defense and durability made him the man behind the plate for both the 1969 champions and 1973 pennant winners." },
  { category: "single-season", stat: "Home runs", value: "53", holder: "Pete Alonso", year: "2019", note: "The Polar Bear arrived with a rookie season that immediately rewrote the record book." },
  { category: "single-season", stat: "Runs batted in", value: "131", holder: "Pete Alonso", year: "2022", note: "Alonso set the Mets’ single-season RBI record while playing through constant attention." },
  { category: "single-season", stat: "Hits", value: "227", holder: "Lance Johnson", year: "1996", note: "Johnson filled the gaps at Shea all season and set a record that has lasted for decades." },
  { category: "single-season", stat: "Batting average", value: ".354", holder: "John Olerud", year: "1998", note: "Olerud’s patient, beautiful swing produced one of the finest hitting seasons in club history." },
  { category: "single-season", stat: "Stolen bases", value: "78", holder: "José Reyes", year: "2007", note: "Reyes was a constant threat and helped make the top of the lineup impossible to relax against." },
  { category: "single-season", stat: "Wins", value: "25", holder: "Tom Seaver", year: "1969", note: "Seaver’s 25 wins powered the Miracle Mets from expansion laughingstock to champion." },
  { category: "single-season", stat: "Strikeouts", value: "276", holder: "Dwight Gooden", year: "1985", note: "Doc’s fastball and curve were so overwhelming that hitters looked late before the pitch left his hand." },
  { category: "single-season", stat: "Saves", value: "51", holder: "Jeurys Familia", year: "2016", note: "Familia set the club record a year after anchoring the bullpen on the run to the World Series." },
  { category: "team", stat: "Most wins", value: "108–54", holder: "1986 Mets", year: "1986", note: "The championship club combined star power, depth, swagger, and the best record in baseball." },
  { category: "team", stat: "First championship", value: "100–62", holder: "1969 Mets", year: "1969", note: "Seven years after losing 120 games, the Mets won 100 and then shocked Baltimore in the World Series." },
  { category: "team", stat: "Most losses", value: "40–120", holder: "1962 Mets", year: "1962", note: "The record was brutal, but the first Mets team created the personality fans still recognize." },
  { category: "team", stat: "Best winning percentage", value: ".667", holder: "1986 Mets", year: "1986", note: "No Mets team has combined a higher winning rate with a World Series title." },
  { category: "team", stat: "Most runs in one game", value: "24", holder: "2018 Mets", year: "August 16, 2018", note: "The Mets beat Philadelphia 24–4 and broke the club record of 23 set exactly 31 years earlier." },
  { category: "postseason", stat: "World Series titles", value: "2", holder: "Mets franchise", year: "1969, 1986", note: "Two championships, separated by seventeen years, still define the franchise’s highest peaks." },
  { category: "postseason", stat: "World Series appearances", value: "5", holder: "Mets franchise", year: "1969–2015", note: "The Mets have reached October’s final series in five different eras." },
  { category: "postseason", stat: "Most consecutive playoff games with a home run", value: "6", holder: "Daniel Murphy", year: "2015", note: "Murphy homered in six straight games and turned one October into a personal time machine." },
  { category: "postseason", stat: "Most wins in one playoff run", value: "8", holder: "1986, 2000, and 2015 Mets", year: "1986, 2000, 2015", note: "Three different pennant winners each collected eight postseason victories under the playoff format of their era." },
];
