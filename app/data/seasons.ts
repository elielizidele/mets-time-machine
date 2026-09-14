export type Season = {
  year: number;
  record: string;
  players: string[];
  moment: string;
  result: string;
  major: boolean;
};

type SeasonRow = [number, string, string, string, string];

const rows: SeasonRow[] = [
  [1962, "40–120", "10th in the National League", "Richie Ashburn|Frank Thomas|Al Jackson", "The expansion Mets arrived at the Polo Grounds and earned their first win on April 23."],
  [1963, "51–111", "10th in the National League", "Duke Snider|Ron Hunt|Jim Hickman", "Duke Snider hit the 400th home run of his Hall of Fame career."],
  [1964, "53–109", "10th in the National League", "Ron Hunt|Frank Thomas|Al Jackson", "Shea Stadium opened and became the Mets’ home for the next 45 seasons."],
  [1965, "50–112", "10th in the National League", "Ron Hunt|Ed Kranepool|Tug McGraw", "Ed Kranepool and Tug McGraw became part of the young core that would grow into winners."],
  [1966, "66–95", "9th in the National League", "Cleon Jones|Ron Hunt|Jack Fisher", "The Mets escaped last place for the first time and showed real progress."],
  [1967, "61–101", "10th in the National League", "Tom Seaver|Cleon Jones|Ron Swoboda", "Tom Seaver debuted, made the All-Star team, and won National League Rookie of the Year."],
  [1968, "73–89", "9th in the National League", "Tom Seaver|Jerry Koosman|Cleon Jones", "Jerry Koosman’s brilliant rookie season gave the Mets a second young ace."],
  [1969, "100–62", "World Series champions", "Tom Seaver|Jerry Koosman|Cleon Jones", "The Miracle Mets overtook Chicago, won the pennant, and stunned Baltimore in the World Series."],
  [1970, "83–79", "3rd in the NL East", "Tom Seaver|Jerry Koosman|Tommie Agee", "Tom Seaver struck out 19 Padres, including a record-setting 10 in a row."],
  [1971, "83–79", "Tied for 3rd in the NL East", "Tom Seaver|Tommie Agee|Cleon Jones", "Seaver produced one of his finest seasons with a 1.76 ERA and 289 strikeouts."],
  [1972, "83–73", "3rd in the NL East", "Tom Seaver|Jon Matlack|John Milner", "Jon Matlack won National League Rookie of the Year."],
  [1973, "82–79", "National League champions", "Tom Seaver|Jon Matlack|Tug McGraw", "‘Ya Gotta Believe’ became the rallying cry for a last-to-first pennant run."],
  [1974, "71–91", "5th in the NL East", "Jon Matlack|John Milner|Rusty Staub", "Injuries and a slow start ended the Mets’ attempt to defend their pennant."],
  [1975, "82–80", "Tied for 3rd in the NL East", "Tom Seaver|Dave Kingman|Jon Matlack", "Tom Seaver won his third National League Cy Young Award."],
  [1976, "86–76", "3rd in the NL East", "Jerry Koosman|Tom Seaver|Dave Kingman", "Jerry Koosman won 21 games as the Mets posted their best record since 1969."],
  [1977, "64–98", "6th in the NL East", "Steve Henderson|John Stearns|Jerry Koosman", "The Midnight Massacre trade sent Tom Seaver to Cincinnati."],
  [1978, "66–96", "6th in the NL East", "Craig Swan|John Stearns|Lee Mazzilli", "Craig Swan led the National League with a 2.43 ERA."],
  [1979, "63–99", "6th in the NL East", "Lee Mazzilli|John Stearns|Craig Swan", "Lee Mazzilli homered in the All-Star Game at the Kingdome."],
  [1980, "67–95", "5th in the NL East", "Lee Mazzilli|John Stearns|Pat Zachry", "New ownership arrived with a hopeful ‘The Magic Is Back’ campaign."],
  [1981, "41–62", "5th/4th in the split NL East", "Lee Mazzilli|John Stearns|Hubie Brooks", "A players’ strike split the season into two halves."],
  [1982, "65–97", "6th in the NL East", "George Foster|Mookie Wilson|Hubie Brooks", "Slugger George Foster arrived in a blockbuster trade with Cincinnati."],
  [1983, "68–94", "6th in the NL East", "Darryl Strawberry|Mookie Wilson|Jesse Orosco", "Darryl Strawberry won National League Rookie of the Year as Tom Seaver returned home."],
  [1984, "90–72", "2nd in the NL East", "Dwight Gooden|Keith Hernandez|Darryl Strawberry", "Dwight Gooden won Rookie of the Year and the young Mets broke through with 90 wins."],
  [1985, "98–64", "2nd in the NL East", "Dwight Gooden|Keith Hernandez|Gary Carter", "Gooden’s 1.53 ERA and 24 wins earned him the Cy Young Award."],
  [1986, "108–54", "World Series champions", "Dwight Gooden|Keith Hernandez|Darryl Strawberry", "A two-out rally in World Series Game 6 kept alive an unforgettable championship season."],
  [1987, "92–70", "2nd in the NL East", "Darryl Strawberry|Howard Johnson|David Cone", "The defending champions won 92 games but finished behind St. Louis."],
  [1988, "100–60", "NL East champions; lost NLCS", "Darryl Strawberry|David Cone|Kevin McReynolds", "The Mets won 100 games before Los Angeles stopped them in a seven-game NLCS."],
  [1989, "87–75", "2nd in the NL East", "Howard Johnson|Darryl Strawberry|David Cone", "Howard Johnson joined the 30–30 club with 36 homers and 41 steals."],
  [1990, "91–71", "2nd in the NL East", "Darryl Strawberry|David Cone|Frank Viola", "The Mets won 91 games but fell four games short of Pittsburgh."],
  [1991, "77–84", "5th in the NL East", "Howard Johnson|David Cone|Frank Viola", "Howard Johnson recorded his third 30–30 season."],
  [1992, "72–90", "5th in the NL East", "Eddie Murray|Bobby Bonilla|David Cone", "A high-priced roster struggled through the season nicknamed ‘The Worst Team Money Could Buy.’"],
  [1993, "59–103", "7th in the NL East", "Bobby Bonilla|Anthony Young|Jeff Innis", "Anthony Young’s record losing streak became the symbol of a 103-loss season."],
  [1994, "55–58", "3rd in the NL East", "Bret Saberhagen|Bobby Bonilla|Todd Hundley", "A players’ strike ended the season in August with no postseason."],
  [1995, "69–75", "2nd in the NL East", "Todd Hundley|Rico Brogna|Bobby Jones", "A young group began taking shape during the shortened season."],
  [1996, "71–91", "4th in the NL East", "Todd Hundley|Bernard Gilkey|Lance Johnson", "Todd Hundley set a major-league record for home runs by a catcher with 41."],
  [1997, "88–74", "3rd in the NL East", "Todd Hundley|John Olerud|Edgardo Alfonzo", "Bobby Valentine led a surprising 17-win improvement."],
  [1998, "88–74", "2nd in the NL East", "Mike Piazza|John Olerud|Edgardo Alfonzo", "The trade for Mike Piazza changed the franchise, though the Mets missed the playoffs on the final weekend."],
  [1999, "97–66", "Wild Card; lost NLCS", "Mike Piazza|Edgardo Alfonzo|Al Leiter", "Robin Ventura’s grand-slam single won a 15-inning NLCS classic at Shea."],
  [2000, "94–68", "National League champions", "Mike Piazza|Edgardo Alfonzo|Al Leiter", "The Mets won their first pennant in 14 years and faced the Yankees in the Subway Series."],
  [2001, "82–80", "3rd in the NL East", "Mike Piazza|Edgardo Alfonzo|Al Leiter", "Mike Piazza’s home run lifted New York in the first game at Shea after September 11."],
  [2002, "75–86", "5th in the NL East", "Mike Piazza|Edgardo Alfonzo|Al Leiter", "A veteran roster faded to last place after entering the year with high expectations."],
  [2003, "66–95", "5th in the NL East", "Mike Piazza|José Reyes|Cliff Floyd", "José Reyes made his major-league debut at age 19."],
  [2004, "71–91", "4th in the NL East", "David Wright|José Reyes|Tom Glavine", "David Wright debuted and gave fans another homegrown star to build around."],
  [2005, "83–79", "3rd in the NL East", "David Wright|José Reyes|Pedro Martínez", "Pedro Martínez’s arrival helped the Mets return to a winning record."],
  [2006, "97–65", "NL East champions; lost NLCS", "Carlos Beltrán|José Reyes|David Wright", "The Mets dominated the East before a heartbreaking Game 7 loss in the NLCS."],
  [2007, "88–74", "2nd in the NL East", "David Wright|José Reyes|Carlos Beltrán", "A seven-game division lead with 17 to play disappeared in a historic collapse."],
  [2008, "89–73", "2nd in the NL East", "David Wright|Johan Santana|Carlos Beltrán", "Johan Santana threw a shutout on short rest before the final game at Shea Stadium."],
  [2009, "70–92", "4th in the NL East", "David Wright|Johan Santana|Francisco Rodríguez", "Citi Field opened, but a long list of injuries overwhelmed the season."],
  [2010, "79–83", "4th in the NL East", "David Wright|Ángel Pagán|R.A. Dickey", "R.A. Dickey revived his career by mastering the knuckleball in Queens."],
  [2011, "77–85", "4th in the NL East", "José Reyes|Carlos Beltrán|R.A. Dickey", "José Reyes became the first Met to win a batting title."],
  [2012, "74–88", "4th in the NL East", "R.A. Dickey|David Wright|Jon Niese", "Johan Santana threw the first no-hitter in Mets history, and Dickey won the Cy Young Award."],
  [2013, "74–88", "3rd in the NL East", "David Wright|Matt Harvey|Daniel Murphy", "Matt Harvey started the All-Star Game in front of the home crowd at Citi Field."],
  [2014, "79–83", "Tied for 2nd in the NL East", "Jacob deGrom|Lucas Duda|Daniel Murphy", "Jacob deGrom won National League Rookie of the Year."],
  [2015, "90–72", "National League champions", "Daniel Murphy|Jacob deGrom|Yoenis Céspedes", "A summer trade and Daniel Murphy’s record home-run streak carried the Mets to the World Series."],
  [2016, "87–75", "Wild Card; lost Wild Card Game", "Noah Syndergaard|Yoenis Céspedes|Jeurys Familia", "Despite major injuries, the Mets returned to October and hosted the Wild Card Game."],
  [2017, "70–92", "4th in the NL East", "Jacob deGrom|Michael Conforto|Yoenis Céspedes", "Michael Conforto became an All-Star during an injury-filled season."],
  [2018, "77–85", "4th in the NL East", "Jacob deGrom|Brandon Nimmo|Zack Wheeler", "Jacob deGrom won the Cy Young Award after posting a 1.70 ERA."],
  [2019, "86–76", "3rd in the NL East", "Jacob deGrom|Pete Alonso|Jeff McNeil", "Pete Alonso set the major-league rookie record with 53 home runs."],
  [2020, "26–34", "Tied for 4th in the NL East", "Jacob deGrom|Michael Conforto|Dominic Smith", "The pandemic shortened the regular season to 60 games and kept fans out of Citi Field."],
  [2021, "77–85", "3rd in the NL East", "Jacob deGrom|Pete Alonso|Brandon Nimmo", "Jacob deGrom delivered a historic first half before injuries ended his season."],
  [2022, "101–61", "Wild Card; lost Wild Card Series", "Francisco Lindor|Pete Alonso|Edwin Díaz", "The Mets won 101 games and Edwin Díaz’s trumpet entrance became a Citi Field event."],
  [2023, "75–87", "4th in the NL East", "Francisco Lindor|Pete Alonso|Kodai Senga", "Kodai Senga starred as a rookie before the club traded veterans at the deadline."],
  [2024, "89–73", "Wild Card; lost NLCS", "Francisco Lindor|Brandon Nimmo|Mark Vientos", "An ‘OMG’ summer and Francisco Lindor’s grand slam sent the Mets on a surprise run to the NLCS."],
  [2025, "83–79", "2nd in the NL East; missed postseason", "Juan Soto|Pete Alonso|Francisco Lindor", "Pete Alonso became the franchise’s career home-run leader during a season that ended just short of October."],
  [2026, "69–80", "Season in progress through September 13", "Francisco Lindor|Juan Soto|Brett Baty", "The Mets are trying to recover from a difficult start as the 2026 season continues."],
];

export const majorYears = new Set([1962, 1969, 1973, 1986, 2000, 2006, 2015, 2024]);

export const seasons: Season[] = rows
  .map(([year, record, result, players, moment]) => ({
    year,
    record,
    result,
    players: players.split("|"),
    moment,
    major: majorYears.has(year),
  }))
  .sort((a, b) => a.year - b.year);

export const decades = [1960, 1970, 1980, 1990, 2000, 2010, 2020];

export const majorStories: Record<number, {
  title: string;
  intro: string;
  turningPoint: string;
  postseason: string;
  deepSummary: string[];
  fanTake: string;
}> = {
  1962: {
    title: "The Beginning",
    intro: "National League baseball returned to New York with a brand-new club, a temporary home at the Polo Grounds, and a personality fans immediately loved.",
    turningPoint: "Jay Hook’s complete game against Pittsburgh on April 23 gave the Mets the first victory in franchise history.",
    postseason: "There was no postseason, but 1962 created the team, the colors, and the loyal fan base that made every future triumph possible.",
    deepSummary: [
      "The record was brutal, but judging 1962 only by 40 wins misses the whole point. New York had lost the Giants and Dodgers after the 1957 season, and the Mets gave National League fans a team of their own again. They borrowed blue from Brooklyn, orange from the Giants, moved into the old Polo Grounds, and somehow felt familiar even though everything about the franchise was new.",
      "Casey Stengel turned a historically bad expansion club into a show people wanted to watch. The Mets lost their first nine games, made mistakes that became legends, and still drew fans who treated every small success like a playoff victory. Jay Hook’s complete-game win on April 23 finally ended the wait and gave the club the first result it could call its own.",
      "Nothing about the season looked like a championship beginning. That is exactly why it matters. The affection built during all those losses became part of the Mets’ identity: funny, stubborn, loyal, and always ready to believe the impossible might happen next.",
    ],
    fanTake: "It was the worst team in baseball and the beginning of something New York was ready to love anyway.",
  },
  1969: {
    title: "The Miracle",
    intro: "A team that had never finished higher than ninth suddenly became baseball’s most impossible champion.",
    turningPoint: "The Mets chased down the Cubs with a furious late-summer run and won the newly created National League East by eight games.",
    postseason: "New York swept Atlanta in the NLCS, then beat the heavily favored Orioles in five games to win its first World Series.",
    deepSummary: [
      "Seven years after losing 120 games, the Mets won 100. Tom Seaver became the ace every contender dreams about, Jerry Koosman gave the rotation another left-handed force, and a defense built around players like Bud Harrelson, Tommie Agee, and Cleon Jones kept turning close games their way. Gil Hodges made the club believe it could win before the rest of baseball caught on.",
      "The Cubs owned the division for much of the summer, but the Mets would not go away. Seaver’s near-perfect game in July made Shea feel like the center of baseball, and the September surge turned hope into something real. When the Mets took first place on September 10, the old jokes about the franchise suddenly stopped being funny.",
      "October made the miracle permanent. New York swept Atlanta for the pennant, then took four straight from a Baltimore team almost everyone expected to win. Agee’s catches, Ron Swoboda’s diving grab, Koosman’s Game 5, and Jones squeezing the final out became the moments that taught every future Mets fan that impossible things really can happen in Queens.",
    ],
    fanTake: "Every surprise Mets run gets compared with 1969 because this is the season that made belief part of the uniform.",
  },
  1973: {
    title: "Ya Gotta Believe",
    intro: "In last place in late August, the Mets recovered just in time to win one of baseball’s tightest division races.",
    turningPoint: "Tug McGraw’s ‘Ya Gotta Believe’ message became the spirit of a team that refused to let injuries or the standings end its season.",
    postseason: "The Mets beat Cincinnati in five games for the pennant, then pushed Oakland to Game 7 of the World Series.",
    deepSummary: [
      "The 1973 Mets spent much of the year injured, inconsistent, and buried in a weak National League East. They were still in last place late in August. But the division stayed close enough for one healthy stretch to matter, and once the lineup came back together, Tug McGraw’s ‘Ya Gotta Believe’ stopped sounding like a slogan and started sounding like a warning.",
      "Tom Seaver, Jerry Koosman, and Jon Matlack gave the Mets the kind of rotation that could drag a team through a tight race. Rusty Staub returned from injury, McGraw became nearly untouchable out of the bullpen, and the Mets clinched the division on the final day of their schedule with only 82 wins. It was messy, tense, and completely on brand.",
      "They then beat Cincinnati’s Big Red Machine in a rough five-game NLCS and came within one win of another championship. The Mets led Oakland three games to two before losing Games 6 and 7. It remains one of the strangest pennants ever won—and one of the best examples of why a Mets season is never truly dead until the standings finally say so.",
    ],
    fanTake: "No Mets team has ever made a better argument for hanging around until the very last possible minute.",
  },
  1986: {
    title: "The Dream Season",
    intro: "The 1986 Mets were deep, loud, fearless, and dominant from Opening Day through an unforgettable October.",
    turningPoint: "A 108-win regular season gave way to a tense six-game NLCS against Houston and the famous two-out comeback in World Series Game 6.",
    postseason: "The Mets beat Houston in six games and Boston in seven to capture the franchise’s second World Series title.",
    deepSummary: [
      "The 1986 Mets did not sneak up on anyone. They were the loudest, deepest, most talented team in the league, and they played with the confidence of a group that knew it. Dwight Gooden fronted the rotation, Keith Hernandez controlled the infield, Gary Carter supplied the big hit, and Darryl Strawberry gave every at-bat home-run electricity. They won 108 games and took the division by 21½.",
      "The regular season felt like a party, but October made them earn everything. The NLCS against Houston was a six-game fight, ending with a 16-inning clincher that seemed to contain an entire series by itself. Then came Boston, a 2–0 World Series deficit, and the bottom of the tenth in Game 6: two outs, nobody on, and a championship almost gone before Carter, Kevin Mitchell, Ray Knight, Mookie Wilson, and one rolling baseball changed the story.",
      "Game 7 was delayed by rain and started badly, because of course it did. The Mets fell behind 3–0, came back, and finally finished the job at Shea. This team could be chaotic and imperfect, but it was also relentless. For Mets fans, 1986 is not simply the last championship. It is the standard every great Mets team has been measured against ever since.",
    ],
    fanTake: "They were talented enough to dominate, wild enough to terrify their own fans, and tough enough to survive the trouble they created.",
  },
  2000: {
    title: "Subway Series",
    intro: "Mike Piazza led a balanced club back to the World Series and into an all-New York matchup that had not happened since 1956.",
    turningPoint: "Mike Hampton’s shutout in NLCS Game 5 finished off St. Louis and delivered the Mets’ first pennant in 14 years.",
    postseason: "The Mets beat San Francisco and St. Louis before losing a close five-game World Series to the Yankees.",
    deepSummary: [
      "The 2000 Mets were built around Mike Piazza’s power, Edgardo Alfonzo’s complete game, Al Leiter’s big-game nerve, and a roster deep enough to survive an uneven summer. They did not catch Atlanta in the division, but 94 wins secured the Wild Card and gave the late-1990s core another shot after the heartbreak of the previous NLCS.",
      "They eliminated San Francisco in four games, with Bobby Jones throwing a one-hit shutout to close the Division Series. Against St. Louis, the Mets finally broke through for the pennant. Mike Hampton was brilliant and ended the series with a complete-game shutout, while Piazza, Alfonzo, and the lineup kept answering every time the pressure rose.",
      "The Subway Series is remembered as a Yankees victory, but it was tighter than the five-game result looks. The Mets let a long Game 1 slip away and never fully recovered, even though nearly every game stayed close. Losing to the team across town still stings. The pennant matters anyway: this was the Piazza-era Mets reaching their highest point and bringing the World Series back to Queens.",
    ],
    fanTake: "The ending hurt twice because it was the World Series and the Yankees, but nobody can take away that National League pennant.",
  },
  2006: {
    title: "A New Power in Queens",
    intro: "A fast, powerful lineup and a strong bullpen carried the Mets to 97 wins and their first division title since 1988.",
    turningPoint: "Carlos Beltrán, José Reyes, and David Wright became the center of a team that spent almost the entire season in first place.",
    postseason: "The Mets swept Los Angeles in the Division Series, then lost a dramatic Game 7 of the NLCS to St. Louis.",
    deepSummary: [
      "For most of 2006, the Mets looked like the beginning of a new National League power. José Reyes flew around the bases, David Wright became a superstar, Carlos Beltrán put together an MVP-level season, and Carlos Delgado gave the lineup the dangerous left-handed bat it had been missing. They won 97 games, buried Atlanta’s long division-title streak, and made Shea feel young again.",
      "The trouble arrived just before October. Pedro Martínez was unavailable and Orlando Hernández was injured on the eve of the playoffs, leaving the rotation much thinner than it had been all year. The Mets still swept Los Angeles and pushed St. Louis to the ninth inning of NLCS Game 7. Endy Chávez’s catch briefly felt like the play that would carry them to the World Series.",
      "Instead, Yadier Molina homered in the ninth, Adam Wainwright’s curveball froze Beltrán with the bases loaded, and a 97-win season ended one swing short. That final pitch has swallowed too much of the memory. The 2006 Mets were fast, powerful, fun, and excellent for six months. The heartbreak is part of their story, but it should not be the entire story.",
    ],
    fanTake: "One curveball ended the season, but it cannot erase how alive Shea felt from April through October.",
  },
  2015: {
    title: "The Pennant Run",
    intro: "Elite young pitching and a suddenly powerful offense turned a quiet summer into the Mets’ first World Series trip in 15 years.",
    turningPoint: "The trade for Yoenis Céspedes transformed the lineup, while Daniel Murphy homered in a record six straight postseason games.",
    postseason: "The Mets beat Los Angeles, swept Chicago for the pennant, and lost the World Series to Kansas City in five games.",
    deepSummary: [
      "The first half of 2015 was built on pitching and patience. Jacob deGrom, Matt Harvey, Noah Syndergaard, and Steven Matz made the future feel close, but the lineup could barely score. Then Wilmer Flores cried on the field during a trade that never happened, the Mets made the deal for Yoenis Céspedes, and the entire season changed direction in a matter of days.",
      "Céspedes gave the offense power and swagger, while the young rotation kept overpowering hitters. The Mets passed Washington, won the East, and then survived a tense Division Series against Los Angeles. Daniel Murphy took over from there, homering in six straight postseason games and helping sweep the Cubs to win the club’s first pennant in 15 years.",
      "Kansas City exposed every small weakness in the World Series, repeatedly turning late Mets leads into losses. The five-game defeat felt abrupt after such a magical run. Still, this was the season Citi Field finally developed its own October memories. The ballpark shook, the pitching arrived, and a team nobody expected to be ready came within three wins of a championship.",
    ],
    fanTake: "It began with almost no offense and ended with Citi Field believing every young pitcher might become an ace.",
  },
  2024: {
    title: "The OMG Season",
    intro: "After an 0–5 start and a difficult May, the Mets found a new personality and produced one of the franchise’s most joyful turnarounds.",
    turningPoint: "Francisco Lindor’s ninth-inning home run in Atlanta clinched a playoff spot, and his grand slam eliminated Philadelphia in the NLDS.",
    postseason: "The Mets beat Milwaukee and Philadelphia before their surprise October run ended against Los Angeles in the NLCS.",
    deepSummary: [
      "The 2024 season looked lost more than once. The Mets opened 0–5, fell 11 games below .500 in late May, and seemed headed for another summer of trade rumors. Then the clubhouse found its voice. Grimace threw a first pitch, José Iglesias gave the team ‘OMG,’ and what could have felt like a collection of gimmicks became the soundtrack to a real turnaround.",
      "Francisco Lindor was the center of it all. He moved into the leadoff spot, played brilliant shortstop, and kept delivering the hit the season needed. His ninth-inning homer in Atlanta clinched a playoff berth on the final day of the regular season. Pete Alonso followed with the biggest swing of his Mets career in Milwaukee, and Lindor’s grand slam against Philadelphia sent Citi Field into a different universe.",
      "The Dodgers ended the run in the NLCS, but the season had already changed how the team felt. Mark Vientos arrived as a middle-of-the-order force, the bullpen survived by any means available, and the Mets went from lifeless to lovable without warning. It was strange, joyful, stressful, and unmistakably Mets.",
    ],
    fanTake: "The memes were fun, but the baseball made them matter—and by October, nobody wanted the ride to stop.",
  },
};

export function getSeason(year: number) {
  return seasons.find((season) => season.year === year);
}
