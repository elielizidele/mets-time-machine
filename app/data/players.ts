import { getEraForYear } from "./eras";
import { playerPeaks } from "./player-peaks";

export type PlayerCategory =
  | "all-time-great"
  | "championship-hero"
  | "fan-favorite"
  | "one-season-wonder"
  | "mets-hall-of-fame";

export type MetsPlayer = {
  rank: number;
  slug: string;
  name: string;
  position: string;
  years: string;
  era: string;
  summary: string;
  signature: string;
  highlights: string[];
  categories: PlayerCategory[];
};

export const categoryLabels: Record<PlayerCategory, string> = {
  "all-time-great": "All-Time Great",
  "championship-hero": "World Series Champion",
  "fan-favorite": "Fan Favorite",
  "one-season-wonder": "One-Season Wonder",
  "mets-hall-of-fame": "Mets Hall of Fame",
};

export const players: MetsPlayer[] = [
  {
    rank: 1, slug: "tom-seaver", name: "Tom Seaver", position: "Starting pitcher", years: "1967–1977, 1983", era: "The Miracle Mets",
    summary: "Seaver gave the Mets an ace and a brand-new franchise a reason to believe it belonged. When he took the mound, the whole team looked more serious—and fans expected something good to happen.",
    signature: "Three Cy Young Awards as a Met and the ace of the 1969 World Series champions.",
    highlights: ["1967 NL Rookie of the Year", "1969 World Series champion", "198 Mets wins"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 2, slug: "david-wright", name: "David Wright", position: "Third baseman", years: "2004–2016, 2018", era: "The Wright and Reyes Years",
    summary: "Wright was supposed to be the guy. He hit, defended, ran, and handled New York without acting like the pressure was a big deal. His back injury stole the ending he deserved, which is why his final game still feels so unfair.",
    signature: "The captain and franchise leader in hits, RBI, and runs scored.",
    highlights: ["Seven-time All-Star", "Two Gold Gloves", "2015 National League champion"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 3, slug: "dwight-gooden", name: "Dwight Gooden", position: "Starting pitcher", years: "1984–1994", era: "The Mets Powerhouse",
    summary: "Doc arrived at 19 with a fastball and curve that made hitters look completely overmatched. For a few years, every Gooden start felt like an event—and 1985 still looks almost impossible.",
    signature: "A 1.53 ERA, 24 wins, and the pitching Triple Crown in his 1985 Cy Young season.",
    highlights: ["1984 NL Rookie of the Year", "1985 NL Cy Young Award", "1986 World Series champion"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 4, slug: "jacob-degrom", name: "Jacob deGrom", position: "Starting pitcher", years: "2014–2022", era: "Young Pitching and a Pennant",
    summary: "Nobody expected a former college shortstop to become the next great Mets ace. Then deGrom started throwing 100 mph, winning Cy Young Awards, and making one run feel like enough.",
    signature: "Back-to-back Cy Young Awards in 2018 and 2019.",
    highlights: ["2014 NL Rookie of the Year", "Two Cy Young Awards", "2015 National League champion"],
    categories: ["all-time-great", "championship-hero", "fan-favorite"],
  },
  {
    rank: 5, slug: "darryl-strawberry", name: "Darryl Strawberry", position: "Right fielder", years: "1983–1990", era: "The Mets Powerhouse",
    summary: "Strawberry made home runs look easy and the 1980s Mets look dangerous. When he was locked in, there was no hitter in the lineup opponents feared more.",
    signature: "The longtime franchise home-run leader and a central bat on the 1986 champions.",
    highlights: ["1983 NL Rookie of the Year", "Seven Mets All-Star selections", "1986 World Series champion"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 6, slug: "jerry-koosman", name: "Jerry Koosman", position: "Starting pitcher", years: "1967–1978", era: "The Miracle Mets",
    summary: "Seaver got the headlines, but Koosman was right there beside him. He took the ball in the biggest games of 1969, helped finish the miracle, and kept pitching through years when the Mets gave him very little margin for error.",
    signature: "Winning pitcher in the deciding Game 5 of the 1969 World Series.",
    highlights: ["1969 World Series champion", "1973 National League champion", "140 Mets wins"],
    categories: ["all-time-great", "championship-hero", "mets-hall-of-fame"],
  },
  {
    rank: 7, slug: "jose-reyes", name: "José Reyes", position: "Shortstop", years: "2003–2011, 2016–2018", era: "The Wright and Reyes Years",
    summary: "Reyes changed the pace of a game the second he got on base. The smile, the triples, the stolen bases, and the music made Shea feel alive again—especially when Wright was hitting behind him.",
    signature: "The first batting champion in Mets history in 2011.",
    highlights: ["Four-time All-Star", "2011 NL batting champion", "Franchise leader in triples"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 8, slug: "pete-alonso", name: "Pete Alonso", position: "First baseman", years: "2019–2025", era: "Steve Cohen and Lindor",
    summary: "Alonso showed up in 2019 and immediately started hitting baseballs into places they had no business reaching. The power is obvious, but the reason fans stay with him is that he never seems to shrink from a big moment.",
    signature: "A major-league rookie record 53 home runs in 2019.",
    highlights: ["2019 NL Rookie of the Year", "Two Home Run Derby titles", "Mets career home-run leader"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 9, slug: "edgardo-alfonzo", name: "Edgardo Alfonzo", position: "Second and third baseman", years: "1995–2002", era: "Piazza, Alfonzo, and October",
    summary: "Fonzie was the player holding the late-1990s Mets together while everyone else got the attention. He hit, defended, moved around the infield, and somehow always seemed to be standing in the right place.",
    signature: "A key force behind consecutive playoff trips and the 2000 pennant.",
    highlights: ["2000 All-Star", "2000 National League champion", "Mets Hall of Fame"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 10, slug: "sid-fernandez", name: "Sid Fernandez", position: "Starting pitcher", years: "1984–1993", era: "The Mets Powerhouse",
    summary: "El Sid’s fastball seemed to rise, his curve came from somewhere hitters hated, and his innings could get weird in a hurry. Then he entered Game 7 in 1986 and quietly kept the whole championship from slipping away.",
    signature: "A two-time Mets All-Star and an overlooked hero of the 1986 clincher.",
    highlights: ["Two-time All-Star", "1986 World Series champion", "More than 1,400 Mets strikeouts"],
    categories: ["all-time-great", "championship-hero", "fan-favorite"],
  },
  {
    rank: 11, slug: "carlos-beltran", name: "Carlos Beltrán", position: "Center fielder", years: "2005–2011", era: "The Wright and Reyes Years",
    summary: "Beltrán had the complete package: power, speed, defense, and the kind of calm that can look almost too quiet for New York. His 2006 season was exactly what the Mets hoped they were buying.",
    signature: "Matched the Mets record with 41 home runs during the 2006 division-title season.",
    highlights: ["Five Mets All-Star selections", "Three Gold Gloves as a Met", "2006 NL East champion"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 12, slug: "francisco-lindor", name: "Francisco Lindor", position: "Shortstop", years: "2021–present", era: "Steve Cohen and Lindor",
    summary: "The Lindor contract came with instant pressure, and his first year was rough enough to make everyone nervous. He settled in, kept playing every day, and eventually became the player carrying the Mets through the 2024 playoff run.",
    signature: "His grand slam against Philadelphia sent the Mets to the 2024 NLCS.",
    highlights: ["30–30 season in 2023", "Gold Glove-level defense", "Leader of the 2024 playoff run"],
    categories: ["all-time-great", "championship-hero", "fan-favorite"],
  },
  {
    rank: 13, slug: "mike-piazza", name: "Mike Piazza", position: "Catcher", years: "1998–2005", era: "Piazza, Alfonzo, and October",
    summary: "Piazza arrived during a strange week and quickly became the biggest star the Mets had in years. His swing changed the lineup, changed Shea, and made the Mets feel important again.",
    signature: "His home run in the first game at Shea after September 11 remains a defining Mets moment.",
    highlights: ["2000 National League champion", "Seven Mets All-Star selections", "National Baseball Hall of Fame"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 14, slug: "jon-matlack", name: "Jon Matlack", position: "Starting pitcher", years: "1971–1977", era: "Seaver and Two Pennants",
    summary: "Matlack gave the Mets a third ace when most teams would have been thrilled with one. He was smooth, tough, and at his best when the lineup across from him was supposed to be impossible.",
    signature: "Threw a two-hit shutout against Cincinnati in the 1973 NLCS.",
    highlights: ["1972 NL Rookie of the Year", "Three-time All-Star", "1973 National League champion"],
    categories: ["all-time-great", "championship-hero", "mets-hall-of-fame"],
  },
  {
    rank: 15, slug: "keith-hernandez", name: "Keith Hernandez", position: "First baseman", years: "1983–1989", era: "The Mets Powerhouse",
    summary: "Keith arrived when losing had become normal and immediately made the Mets carry themselves differently. He saved runs, controlled the clubhouse, and made a young team understand what winning was supposed to look like.",
    signature: "The captain and field general of the 1986 World Series champions.",
    highlights: ["1986 World Series champion", "Six Gold Gloves as a Met", "Number 17 retired"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 16, slug: "brandon-nimmo", name: "Brandon Nimmo", position: "Outfielder", years: "2016–2025", era: "Steve Cohen and Lindor",
    summary: "Nimmo took the long way to becoming a core player. He waited through injuries, crowded outfields, and plenty of doubt, then kept getting on base and running hard until the Mets had no choice but to build around him.",
    signature: "A homegrown on-base machine who helped lead the Mets back to October.",
    highlights: ["First-round Mets draft pick", "Longtime leadoff hitter", "2024 NLCS run"],
    categories: ["all-time-great", "championship-hero", "fan-favorite"],
  },
  {
    rank: 17, slug: "howard-johnson", name: "Howard Johnson", position: "Third baseman", years: "1985–1993", era: "The Mets Powerhouse",
    summary: "HoJo could hit a home run, steal a base, and then make you forget he had just done both. His three 30–30 seasons made him one of the strangest and most dangerous offensive players in Mets history.",
    signature: "The only Met to post three different 30-home-run, 30-steal seasons.",
    highlights: ["1986 World Series champion", "Two-time All-Star", "Two-time NL home-run leader"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 18, slug: "al-leiter", name: "Al Leiter", position: "Starting pitcher", years: "1998–2004", era: "Piazza, Alfonzo, and October",
    summary: "Leiter pitched every important game like he had a personal argument with it. He could be slow, emotional, and stressful to watch, but when the Mets needed a big start, he wanted the ball.",
    signature: "A two-hit shutout in the 1999 tiebreaker sent the Mets to the postseason.",
    highlights: ["Two-time Mets All-Star", "2000 National League champion", "Mets Hall of Fame"],
    categories: ["all-time-great", "championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 19, slug: "jeff-mcneil", name: "Jeff McNeil", position: "Second baseman and outfielder", years: "2018–present", era: "Steve Cohen and Lindor",
    summary: "McNeil did not arrive with much noise. He just kept hitting, moved wherever the Mets put him, and turned annoying little line drives into a batting title. The nickname is silly; the bat is not.",
    signature: "Won the 2022 National League batting title with a .326 average.",
    highlights: ["2022 NL batting champion", "Two-time All-Star", "2024 NLCS run"],
    categories: ["all-time-great", "championship-hero", "fan-favorite"],
  },
  {
    rank: 20, slug: "david-cone", name: "David Cone", position: "Starting pitcher", years: "1987–1992, 2003", era: "The Mets Powerhouse",
    summary: "Cone pitched like he was daring hitters to beat him. The strikeouts were loud, the emotions were obvious, and his 1988 season turned him into the next ace of the powerhouse Mets.",
    signature: "Went 20–3 in 1988 and struck out 19 Phillies in his final start of 1991.",
    highlights: ["Two-time Mets All-Star", "1988 NL strikeout leader", "20-win season"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 21, slug: "john-stearns", name: "John Stearns", position: "Catcher", years: "1975–1984", era: "The Rebuilding Years",
    summary: "The Bad Dude played with toughness and fire during a difficult era. His all-out style made him one of the most respected Mets of his generation.",
    signature: "A four-time All-Star who gave the rebuilding Mets an identity.",
    highlights: ["Four-time All-Star", "Strong defensive catcher", "Beloved clubhouse leader"],
    categories: ["fan-favorite"],
  },
  {
    rank: 22, slug: "john-olerud", name: "John Olerud", position: "First baseman", years: "1997–1999", era: "Piazza, Alfonzo, and October",
    summary: "Olerud’s calm approach and elite on-base skill anchored the late-1990s lineup. He was also the sure-handed center of the famous best infield ever.",
    signature: "Hit .354 with a .447 on-base percentage in 1998.",
    highlights: ["1999 postseason run", "Elite on-base hitter", "Outstanding first-base defense"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 23, slug: "lee-mazzilli", name: "Lee Mazzilli", position: "Outfielder and first baseman", years: "1976–1981, 1986–1989", era: "Rebuild to Championship",
    summary: "The Brooklyn-born Mazzilli was the face of the late-1970s Mets, then returned as a veteran contributor on the 1986 champions.",
    signature: "Homered and drew the winning walk in the 1979 All-Star Game.",
    highlights: ["1979 All-Star", "1986 World Series champion", "Mets Hall of Fame"],
    categories: ["championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 24, slug: "kevin-mcreynolds", name: "Kevin McReynolds", position: "Left fielder", years: "1987–1991, 1994", era: "The Mets Powerhouse",
    summary: "McReynolds supplied quiet, steady power in the middle of several strong Mets lineups. His best season nearly earned him an MVP award.",
    signature: "Hit 27 home runs, drove in 99, and went 21-for-21 stealing bases in 1988.",
    highlights: ["Third in 1988 MVP voting", "95 RBI in 1987", "Powerhouse-era run producer"],
    categories: ["fan-favorite"],
  },
  {
    rank: 25, slug: "dave-magadan", name: "Dave Magadan", position: "First and third baseman", years: "1986–1992", era: "The Mets Powerhouse",
    summary: "Magadan was a line-drive hitter with excellent control of the strike zone. He gave the Mets a reliable left-handed bat at both corner infield spots.",
    signature: "Hit .328 during his breakout 1990 season.",
    highlights: ["1986 World Series champion", "Career-best 1990 season", "Versatile corner infielder"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 26, slug: "armando-benitez", name: "Armando Benítez", position: "Relief pitcher", years: "1999–2003", era: "Piazza, Alfonzo, and October",
    summary: "Benítez brought a powerful fastball to the back of the bullpen. His Mets career included dominant stretches, high save totals, and difficult October moments.",
    signature: "Recorded 160 saves as a Met, second in franchise history when he left.",
    highlights: ["41 saves in 2001", "2000 National League champion", "Power bullpen arm"],
    categories: ["championship-hero"],
  },
  {
    rank: 27, slug: "tug-mcgraw", name: "Tug McGraw", position: "Relief pitcher", years: "1965–1967, 1969–1974", era: "Seaver and Two Pennants",
    summary: "McGraw’s screwball, personality, and belief made him unforgettable. His Ya Gotta Believe spirit helped carry the 1973 Mets from last place to the pennant.",
    signature: "The emotional leader and relief ace of the 1973 National League champions.",
    highlights: ["1969 World Series champion", "1973 National League champion", "Two-time Mets All-Star"],
    categories: ["championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 28, slug: "roger-mcdowell", name: "Roger McDowell", position: "Relief pitcher", years: "1985–1989", era: "The Mets Powerhouse",
    summary: "McDowell was a fearless and colorful reliever who handled crucial late innings. He helped give the 1986 Mets one of baseball’s deepest pitching staffs.",
    signature: "Won 14 games in relief during the 1986 championship season.",
    highlights: ["1986 World Series champion", "Late-inning relief ace", "Known for his clubhouse personality"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 29, slug: "mookie-wilson", name: "Mookie Wilson", position: "Center fielder", years: "1980–1989", era: "The Mets Powerhouse",
    summary: "Mookie’s speed, smile, and effort made him a fan favorite before the Mets became winners. He remained central to their rise and their greatest comeback.",
    signature: "His ground ball went through Bill Buckner’s legs to finish Game 6 of the 1986 World Series.",
    highlights: ["1986 World Series champion", "Popular homegrown Met", "More than 1,100 Mets hits"],
    categories: ["championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 30, slug: "ray-knight", name: "Ray Knight", position: "Third baseman", years: "1984–1986", era: "The Mets Powerhouse",
    summary: "Knight delivered when the 1986 Mets needed him most. He scored the winning run in Game 6 and drove in the go-ahead run in Game 7.",
    signature: "Named Most Valuable Player of the 1986 World Series.",
    highlights: ["1986 World Series MVP", "Scored the Game 6 winning run", "Clutch Game 7 hit"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 31, slug: "gary-carter", name: "Gary Carter", position: "Catcher", years: "1985–1989", era: "The Mets Powerhouse",
    summary: "The Kid brought a Hall of Fame catcher’s bat, glove, and leadership to a team ready to win. His joy fit the personality of the 1986 champions.",
    signature: "Started the two-out rally that saved Game 6 of the 1986 World Series.",
    highlights: ["1986 World Series champion", "Four-time Mets All-Star", "National Baseball Hall of Fame"],
    categories: ["championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 32, slug: "cleon-jones", name: "Cleon Jones", position: "Left fielder", years: "1963, 1965–1975", era: "The Miracle Mets",
    summary: "Jones was the best hitter on the Miracle Mets and a steady presence through the 1973 pennant. His final catch sealed the first championship.",
    signature: "Caught the final out of the 1969 World Series.",
    highlights: ["Hit .340 in 1969", "1969 All-Star", "1969 World Series champion"],
    categories: ["championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 33, slug: "ed-kranepool", name: "Ed Kranepool", position: "First baseman and outfielder", years: "1962–1979", era: "Original Met to Miracle Met",
    summary: "Kranepool grew up with the franchise. He debuted as a teenager, survived the early losses, won a championship, and stayed longer than any other Met.",
    signature: "Played a franchise-record 18 seasons, all with the Mets.",
    highlights: ["Original 1962 Met", "1965 All-Star", "1969 World Series champion"],
    categories: ["championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 34, slug: "bud-harrelson", name: "Bud Harrelson", position: "Shortstop", years: "1965–1977", era: "The Miracle Mets",
    summary: "Harrelson’s glove, grit, and leadership held the championship infield together. He later returned as a coach and manager, making him part of several Mets eras.",
    signature: "Starting shortstop for the 1969 champions and 1973 pennant winners.",
    highlights: ["1969 World Series champion", "Two-time All-Star", "Gold Glove winner"],
    categories: ["championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 35, slug: "lenny-dykstra", name: "Lenny Dykstra", position: "Center fielder", years: "1985–1989", era: "The Mets Powerhouse",
    summary: "Dykstra played with nonstop aggression and gave the Mets a dangerous leadoff hitter. He seemed most comfortable when the pressure was highest.",
    signature: "Hit a walk-off home run in Game 3 of the 1986 NLCS.",
    highlights: ["1986 World Series champion", "Postseason power", "Spark-plug leadoff hitter"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 36, slug: "jerry-grote", name: "Jerry Grote", position: "Catcher", years: "1966–1977", era: "The Miracle Mets",
    summary: "Grote’s defense, toughness, and handling of pitchers were vital to the Mets’ great young staff. His value went far beyond his batting line.",
    signature: "Caught the great pitching staffs of both the 1969 and 1973 pennant winners.",
    highlights: ["1969 World Series champion", "1973 National League champion", "Two-time All-Star"],
    categories: ["championship-hero", "mets-hall-of-fame"],
  },
  {
    rank: 37, slug: "michael-conforto", name: "Michael Conforto", position: "Outfielder", years: "2015–2021", era: "Young Pitching and a Pennant",
    summary: "Conforto reached the majors quickly and added a polished left-handed bat to the 2015 pennant winners. He later developed into the lineup’s most complete hitter.",
    signature: "Hit two home runs in Game 4 of the 2015 World Series.",
    highlights: ["2015 National League champion", "2017 All-Star", "Three 20-home-run seasons"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 38, slug: "rick-reed", name: "Rick Reed", position: "Starting pitcher", years: "1997–2001", era: "Piazza, Alfonzo, and October",
    summary: "Reed was an unlikely success story who became a dependable starter. His control and consistency helped bridge the Mets from rebuilding to contention.",
    signature: "Won 59 games for the Mets after arriving as a replacement player and non-roster invitee.",
    highlights: ["1998 All-Star", "2000 National League champion", "Five steady Mets seasons"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 39, slug: "ron-darling", name: "Ron Darling", position: "Starting pitcher", years: "1983–1991", era: "The Mets Powerhouse",
    summary: "Darling’s intelligence and deep mix of pitches made him a steady part of the great 1980s rotation. He was especially strong during the 1986 World Series.",
    signature: "Allowed only one run across his first two starts in the 1986 World Series.",
    highlights: ["1986 World Series champion", "1985 All-Star", "Mets Hall of Fame"],
    categories: ["championship-hero", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 40, slug: "tom-glavine", name: "Tom Glavine", position: "Starting pitcher", years: "2003–2007", era: "The Wright and Reyes Years",
    summary: "The longtime Mets rival became a reliable veteran in Queens. His strong 2006 season helped the club win its first division title in 18 years.",
    signature: "Earned his 300th major-league win while pitching for the Mets in 2007.",
    highlights: ["Two-time Mets All-Star", "2006 NL East champion", "National Baseball Hall of Fame"],
    categories: ["fan-favorite"],
  },
  {
    rank: 41, slug: "johan-santana", name: "Johan Santana", position: "Starting pitcher", years: "2008–2010, 2012", era: "A New Home and Another Rebuild",
    summary: "Santana arrived as an ace and immediately pitched the Mets through the final weekend at Shea. Injuries shortened his run, but one night made it historic.",
    signature: "Threw the first no-hitter in Mets history on June 1, 2012.",
    highlights: ["First Mets no-hitter", "2008 NL ERA leader", "Three Opening Day starts"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 42, slug: "ra-dickey", name: "R.A. Dickey", position: "Starting pitcher", years: "2010–2012", era: "A New Home and Another Rebuild",
    summary: "Dickey reinvented himself with the knuckleball and became one of baseball’s best stories. His final Mets season was a brilliant, unexpected peak.",
    signature: "Won 20 games and the 2012 National League Cy Young Award.",
    highlights: ["2012 NL Cy Young Award", "20-win season", "Led NL in strikeouts"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 43, slug: "jesse-orosco", name: "Jesse Orosco", position: "Relief pitcher", years: "1979, 1981–1987", era: "The Mets Powerhouse",
    summary: "Orosco developed into an elite left-handed reliever and shared the late innings with Roger McDowell. His glove toss became the lasting image of 1986.",
    signature: "Struck out Marty Barrett for the final out of the 1986 World Series.",
    highlights: ["1986 World Series champion", "Two-time All-Star", "Recorded the championship’s final out"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 44, slug: "tommie-agee", name: "Tommie Agee", position: "Center fielder", years: "1968–1972", era: "The Miracle Mets",
    summary: "Agee gave the young Mets power, speed, and elite center-field defense. His great 1969 season helped turn a former last-place team into a champion.",
    signature: "Made two unforgettable catches in Game 3 of the 1969 World Series.",
    highlights: ["1969 World Series champion", "1969 Gold Glove", "26 home runs in 1969"],
    categories: ["championship-hero", "mets-hall-of-fame"],
  },
  {
    rank: 45, slug: "daniel-murphy", name: "Daniel Murphy", position: "Second and third baseman", years: "2008–2015", era: "Young Pitching and a Pennant",
    summary: "Murphy’s contact skill made him a dependable hitter for years. Then his stunning October power carried the Mets through the 2015 National League playoffs.",
    signature: "Homered in six straight postseason games during the 2015 pennant run.",
    highlights: ["2015 NLCS MVP", "2015 National League champion", "Seven productive Mets seasons"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 46, slug: "wally-backman", name: "Wally Backman", position: "Second baseman", years: "1980–1988", era: "The Mets Powerhouse",
    summary: "Backman supplied grit, contact, and relentless energy at the top of the lineup. His platoon with Tim Teufel helped make the 1986 club unusually deep.",
    signature: "Hit .320 as the fiery second baseman of the 1986 champions.",
    highlights: ["1986 World Series champion", "Homegrown Met", "Spark at the top of the lineup"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 47, slug: "bob-ojeda", name: "Bob Ojeda", position: "Starting pitcher", years: "1986–1990", era: "The Mets Powerhouse",
    summary: "Ojeda completed the championship rotation after arriving in a smart trade. His control and calm gave the 1986 Mets another dependable big-game starter.",
    signature: "Went 18–5 with a 2.57 ERA in the 1986 championship season.",
    highlights: ["1986 World Series champion", "Won Game 3 of the World Series", "Career-best season in 1986"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 48, slug: "curtis-granderson", name: "Curtis Granderson", position: "Outfielder", years: "2014–2017", era: "Young Pitching and a Pennant",
    summary: "Granderson brought power, patience, leadership, and class to a young team. He was the most consistent hitter throughout the 2015 pennant run.",
    signature: "Hit three home runs during the 2015 World Series.",
    highlights: ["2015 National League champion", "Led Mets with 26 homers in 2015", "Respected clubhouse leader"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 49, slug: "matt-harvey", name: "Matt Harvey", position: "Starting pitcher", years: "2012–2013, 2015–2018", era: "Young Pitching and a Pennant",
    summary: "Harvey Day made Citi Field feel like an event again. His overpowering rise, comeback from surgery, and emotional 2015 postseason made his peak unforgettable.",
    signature: "Pitched eight scoreless innings in Game 5 of the 2015 World Series before returning for the ninth.",
    highlights: ["2013 All-Star Game starter", "2015 National League champion", "Started 2015 World Series Game 5"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 50, slug: "mike-hampton", name: "Mike Hampton", position: "Starting pitcher", years: "2000", era: "Piazza, Alfonzo, and October",
    summary: "Hampton spent only one season with the Mets, but it ended with a pennant. He saved his best work for the National League Championship Series.",
    signature: "Pitched a three-hit shutout to clinch the 2000 National League pennant.",
    highlights: ["2000 NLCS MVP", "2000 National League champion", "15 regular-season wins"],
    categories: ["championship-hero", "one-season-wonder"],
  },
  {
    rank: 51, slug: "bernard-gilkey", name: "Bernard Gilkey", position: "Left fielder", years: "1996–1998", era: "Piazza, Alfonzo, and October",
    summary: "Gilkey gave the late-1990s Mets a powerful, athletic outfielder who could change a game with his bat and speed. His 1996 season was one of the biggest breakout years in team history.",
    signature: "Hit .317 with 30 home runs, 117 RBI, and 44 doubles in 1996.",
    highlights: ["1996 All-Star", "30-home-run season", "117 RBI in 1996"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 52, slug: "lance-johnson", name: "Lance Johnson", position: "Center fielder", years: "1996–1998", era: "Piazza, Alfonzo, and October",
    summary: "Johnson brought speed, contact, and nonstop energy to center field. His 1996 season was a statistical explosion that made him one of the most exciting Mets to watch.",
    signature: "Set the Mets record with 227 hits and 21 triples in 1996.",
    highlights: ["1996 All-Star", "227 hits in 1996", "21 triples in 1996"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 53, slug: "robin-ventura", name: "Robin Ventura", position: "Third baseman", years: "1999–2001", era: "Piazza, Alfonzo, and October",
    summary: "Ventura brought Gold Glove defense, professional at-bats, and the most unusual playoff hit in Mets history. He became part of the calm core that turned the late-1990s club into a pennant winner.",
    signature: "Hit the 1999 NLCS Grand Slam Single against Atlanta.",
    highlights: ["1999 National League champion", "1999 Grand Slam Single", "Gold Glove third baseman"],
    categories: ["all-time-great", "championship-hero", "fan-favorite"],
  },
  {
    rank: 54, slug: "juan-soto", name: "Juan Soto", position: "Right fielder", years: "2025–present", era: "Steve Cohen and Lindor",
    summary: "Soto arrived as one of baseball’s greatest young hitters and immediately changed the size of the Mets’ expectations. His patience, power, and fearless at-bats made every plate appearance feel important.",
    signature: "The superstar signing who announced the Mets were ready to act like a big-market team.",
    highlights: ["Record-setting Mets free-agent signing", "Elite on-base hitter", "Modern face of the Cohen era"],
    categories: ["fan-favorite"],
  },
  {
    rank: 55, slug: "angel-pagan", name: "Angel Pagán", position: "Center fielder", years: "2008–2011", era: "A New Home and Another Rebuild",
    summary: "Pagán was one of the most watchable players on the Mets during the difficult Citi Field rebuilding years. He brought speed, personality, athletic catches, and enough power to keep games lively.",
    signature: "A switch-hitting center fielder who supplied energy during the transition from Shea to Citi Field.",
    highlights: ["Everyday center fielder", "Speed and defensive range", "Fan favorite of the early Citi Field era"],
    categories: ["fan-favorite"],
  },
  {
    rank: 56, slug: "juan-lagares", name: "Juan Lagares", position: "Center fielder", years: "2013–2019", era: "Young Pitching and a Pennant",
    summary: "Lagares could make center field feel enormous. His throwing arm and fearless routes earned him a Gold Glove, and his defense gave the Mets a chance to win even when the bat was still developing.",
    signature: "Won the 2014 Gold Glove with spectacular defense in center field.",
    highlights: ["2014 Gold Glove", "2015 National League champion", "One of the best defensive Mets of his era"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 57, slug: "todd-hundley", name: "Todd Hundley", position: "Catcher", years: "1990–1998", era: "A Difficult Reset",
    summary: "Hundley gave the Mets power from behind the plate during a period when the rest of the roster was still searching for direction. His swing made him a star before Piazza arrived and made the catcher position a source of real excitement again.",
    signature: "Hit 41 home runs in 1996, then a major-league record for a catcher.",
    highlights: ["Two-time All-Star", "41 home runs in 1996", "Mets power leader before Piazza"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 58, slug: "pedro-martinez", name: "Pedro Martínez", position: "Starting pitcher", years: "2005–2008", era: "Piazza, Alfonzo, and October",
    summary: "Pedro did not have a long Mets run, but his presence gave the club an ace who could make a lineup look helpless. His command, changeup, and fearless personality made him one of the most recognizable stars of the early Citi Field years.",
    signature: "Won 15 games and struck out 208 hitters in his first Mets season.",
    highlights: ["2006 All-Star", "National Baseball Hall of Famer", "One of the greatest pitchers of his generation"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 59, slug: "frank-viola", name: "Frank Viola", position: "Starting pitcher", years: "1989–1991", era: "The Mets Powerhouse",
    summary: "Viola arrived with a Cy Young Award and gave the Mets a veteran left-hander during the final years of the powerhouse. He worked quickly, trusted his changeup, and handled the pressure of replacing part of a championship rotation.",
    signature: "Won 20 games for the 1990 Mets and provided a veteran ace during the transition years.",
    highlights: ["20-win season in 1990", "1990 All-Star", "Cy Young Award winner before joining the Mets"],
    categories: ["fan-favorite"],
  },
  {
    rank: 60, slug: "craig-swan", name: "Craig Swan", position: "Starting pitcher", years: "1973–1984", era: "The Rebuilding Years",
    summary: "Swan kept pitching through one of the emptiest periods in Mets history. His fastball, control, and stubborn durability gave fans a real ace to watch after the championship core began to disappear.",
    signature: "Led the National League with a 2.43 ERA in 1978.",
    highlights: ["1978 NL ERA leader", "Two-time All-Star", "Dependable ace during the rebuild"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 61, slug: "bret-saberhagen", name: "Bret Saberhagen", position: "Starting pitcher", years: "1992–1995", era: "A Difficult Reset",
    summary: "Saberhagen’s Mets career was interrupted by injuries, but his healthy stretches showed the precision and calm that had made him a two-time Cy Young winner. He gave the club a real ace during the start of its climb back to respectability.",
    signature: "Brought two Cy Young Awards and veteran leadership to the mid-1990s rotation.",
    highlights: ["Two-time Cy Young Award winner", "1995 Mets comeback season", "Veteran leader of the mid-1990s rotation"],
    categories: ["fan-favorite"],
  },
  {
    rank: 62, slug: "max-scherzer", name: "Max Scherzer", position: "Starting pitcher", years: "2022–2023", era: "Steve Cohen and Lindor",
    summary: "Scherzer brought championship experience, fierce competitiveness, and a full-volume personality to the first major spending era under Steve Cohen. The Mets did not get the October ending they wanted, but his starts still felt like events.",
    signature: "Signed as a three-time Cy Young winner and helped lead the 2022 Mets to 101 wins.",
    highlights: ["Three-time Cy Young Award winner", "2022 All-Star", "Face of the first Cohen-era superteam"],
    categories: ["fan-favorite"],
  },
  {
    rank: 63, slug: "noah-syndergaard", name: "Noah Syndergaard", position: "Starting pitcher", years: "2015–2019, 2021", era: "Young Pitching and a Pennant",
    summary: "Syndergaard’s fastball and slider made him one of the most intimidating young pitchers in baseball. He arrived with Harvey, deGrom, and Matz to form the rotation that carried the Mets back to the World Series.",
    signature: "Struck out 218 hitters with a 2.60 ERA in 2016.",
    highlights: ["2015 National League champion", "2016 All-Star", "The defining power arm of the 2015 rotation"],
    categories: ["championship-hero", "all-time-great", "fan-favorite"],
  },
  {
    rank: 64, slug: "steve-trachsel", name: "Steve Trachsel", position: "Starting pitcher", years: "2001–2006", era: "Wright, Reyes, and Beltran",
    summary: "Trachsel’s Mets career began with a rough first impression, then turned into one of the steadier parts of the early-2000s rotation. He slowed the game down, took the ball every fifth day, and quietly helped bridge the club from the Piazza years to the next contender.",
    signature: "Recovered from an 8.24 ERA start to win 16 games for the 2003 Mets.",
    highlights: ["16 wins in 2003", "Reliable innings during a transition", "Longtime major-league starter"],
    categories: ["fan-favorite"],
  },
  {
    rank: 65, slug: "john-franco", name: "John Franco", position: "Relief pitcher", years: "1990–2001, 2003–2004", era: "A Difficult Reset",
    summary: "The Brooklyn-born lefty became the Mets’ emotional anchor through good teams, bad teams, injuries, and everything in between. Franco saved games, handed the ball to younger relievers, and eventually wore the captain’s C because fans and teammates trusted him completely.",
    signature: "The Mets’ longtime left-handed saves leader and third captain.",
    highlights: ["276 Mets saves", "Four-time All-Star", "Mets Hall of Fame"],
    categories: ["all-time-great", "fan-favorite", "mets-hall-of-fame"],
  },
  {
    rank: 66, slug: "edwin-diaz", name: "Edwin Díaz", position: "Relief pitcher", years: "2019–2025", era: "Steve Cohen and Lindor",
    summary: "Díaz went from a rocky first season to one of the most overpowering closers the Mets have ever had. The fastball, the slider, and the trumpet entrance turned the ninth inning into a Citi Field event whenever he came running in from the bullpen.",
    signature: "The 2022 season when his entrance and his strikeouts made him the sound of the Mets.",
    highlights: ["2022 NL Reliever of the Year", "32 saves with a 1.31 ERA in 2022", "Two-time All-Star as a Met"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 67, slug: "randy-myers", name: "Randy Myers", position: "Relief pitcher", years: "1985–1989", era: "The Mets Powerhouse",
    summary: "Myers was a hard-throwing young lefty in a bullpen full of memorable arms. He grew into a closer after the championship season and became part of the pitching depth that kept the Mets dangerous through the late 1980s.",
    signature: "Developed from a young 1986 arm into the Mets’ late-inning closer.",
    highlights: ["1986 World Series team", "Late-inning power arm", "Became an All-Star closer after leaving New York"],
    categories: ["fan-favorite"],
  },
  {
    rank: 68, slug: "wayne-garrett", name: "Wayne Garrett", position: "Third baseman", years: "1969–1976", era: "Seaver, the Miracle, and Two Pennants",
    summary: "Garrett was the young third baseman who grew up in the middle of the Mets’ first great teams. He played with patience and toughness, delivered big hits in both pennant runs, and became one of the familiar faces of the Miracle era.",
    signature: "Hit the go-ahead home run in Game 3 of the 1969 NLCS and homered twice in the 1973 World Series.",
    highlights: ["1969 World Series champion", "1973 National League champion", "More than 700 games at third base for the Mets"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 69, slug: "john-milner", name: "John Milner", position: "First baseman and left fielder", years: "1971–1977", era: "Seaver, the Miracle, and Two Pennants",
    summary: "Milner was a powerful left-handed bat who gave the Mets another dangerous hitter around Seaver and the pitching staff. He could play first base or left field, hit the ball out of Shea, and became one of the lineup’s most useful pieces before the 1977 breakup.",
    signature: "Led the Mets in home runs three straight seasons from 1972 through 1974.",
    highlights: ["1973 National League champion", "Three straight seasons leading the Mets in home runs", "Five-hit game as a rookie"],
    categories: ["fan-favorite"],
  },
  {
    rank: 70, slug: "carlos-delgado", name: "Carlos Delgado", position: "First baseman", years: "2006–2009", era: "Wright, Reyes, and Beltran",
    summary: "Delgado gave the 2006 Mets the cleanup hitter they needed: patient, powerful, and dangerous enough to change a game with one swing. His four seasons in Queens included a pennant race, a franchise-record nine-RBI game, and a difficult ending caused by a hip injury.",
    signature: "Drove in nine runs against the Yankees in 2008, still the Mets’ single-game record.",
    highlights: ["38 home runs and 114 RBI in 2006", "Nine-RBI Mets record", "Roberto Clemente Award winner"],
    categories: ["all-time-great", "fan-favorite"],
  },
  {
    rank: 71, slug: "kevin-mitchell", name: "Kevin Mitchell", position: "Third baseman and outfielder", years: "1984, 1986", era: "The Mets Powerhouse",
    summary: "Mitchell was the young, switch-everything piece of the 1986 Mets. He could play almost anywhere, hit the ball hard, and seemed to appear whenever the game got strange. His single in Game 6 kept the comeback alive before his trade helped bring Kevin McReynolds to Queens.",
    signature: "Pinch-hit single in the tenth inning of 1986 World Series Game 6, then scored the tying run.",
    highlights: ["1986 World Series champion", "12 home runs in 108 games in 1986", "Later won the 1989 NL MVP Award"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 72, slug: "al-weis", name: "Al Weis", position: "Second baseman and shortstop", years: "1968–1971", era: "Seaver, the Miracle, and Two Pennants",
    summary: "Weis was not supposed to be one of the stars of the Miracle Mets. He was a light-hitting utility infielder who mostly played defense. Then October arrived, and suddenly the unlikely guy kept delivering the biggest hits.",
    signature: "Hit .455 in the 1969 World Series, including the tying home run in Game 5.",
    highlights: ["1969 World Series champion", "1969 Babe Ruth Award", "Three-run homer against the Cubs during the pennant race"],
    categories: ["championship-hero", "fan-favorite"],
  },
  {
    rank: 73, slug: "donn-clendenon", name: "Donn Clendenon", position: "First baseman", years: "1969–1971", era: "Seaver, the Miracle, and Two Pennants",
    summary: "Clendenon arrived during the 1969 pennant race and gave the Mets a right-handed power bat built for October. He did not need a long runway to become part of the story: three World Series home runs made him the club’s first championship MVP.",
    signature: "Three home runs and the 1969 World Series MVP Award against Baltimore.",
    highlights: ["1969 World Series champion", "1969 World Series MVP", "Drove in 97 runs for the 1970 Mets"],
    categories: ["championship-hero", "fan-favorite"],
  },
];

// These lists are intentionally selective. “All-Time Great” means sustained
// Mets excellence, while “World Series Champion” is factual: it includes only
// players from the Mets' 1969 or 1986 championship teams.
const allTimeGreats = new Set([
  "tom-seaver", "david-wright", "dwight-gooden", "jacob-degrom",
  "darryl-strawberry", "jerry-koosman", "jose-reyes", "pete-alonso",
  "edgardo-alfonzo", "carlos-beltran", "francisco-lindor", "mike-piazza",
  "jon-matlack", "keith-hernandez", "howard-johnson", "al-leiter",
  "david-cone", "johan-santana", "ra-dickey", "craig-swan", "sid-fernandez",
  "gary-carter", "ron-darling", "john-franco", "carlos-delgado", "edwin-diaz",
]);

const worldSeriesChampions = new Set([
  "tom-seaver", "jerry-koosman", "tug-mcgraw", "cleon-jones",
  "ed-kranepool", "bud-harrelson", "jerry-grote", "tommie-agee",
  "dwight-gooden", "darryl-strawberry", "sid-fernandez", "keith-hernandez",
  "howard-johnson", "lee-mazzilli", "dave-magadan", "roger-mcdowell",
  "mookie-wilson", "ray-knight", "gary-carter", "lenny-dykstra",
  "ron-darling", "jesse-orosco", "wally-backman", "bob-ojeda",
  "kevin-mitchell", "al-weis", "wayne-garrett", "randy-myers",
  "donn-clendenon",
]);

const fanFavorites = new Set([
  "tom-seaver", "david-wright", "dwight-gooden", "jacob-degrom",
  "darryl-strawberry", "jose-reyes", "pete-alonso", "edgardo-alfonzo",
  "sid-fernandez", "carlos-beltran", "francisco-lindor", "mike-piazza", "keith-hernandez",
  "brandon-nimmo", "howard-johnson", "john-stearns", "john-olerud",
  "lee-mazzilli", "tug-mcgraw", "mookie-wilson", "ray-knight",
  "gary-carter", "cleon-jones", "ed-kranepool", "bud-harrelson",
  "lenny-dykstra", "ron-darling", "johan-santana", "ra-dickey",
  "jesse-orosco", "daniel-murphy", "curtis-granderson", "matt-harvey",
  "bernard-gilkey", "lance-johnson", "robin-ventura", "juan-soto", "angel-pagan",
  "juan-lagares", "todd-hundley", "pedro-martinez", "frank-viola", "craig-swan",
  "bret-saberhagen", "noah-syndergaard", "kevin-mitchell", "al-weis", "donn-clendenon",
  "wayne-garrett", "john-milner", "carlos-delgado", "john-franco", "edwin-diaz",
  "michael-conforto", "wally-backman", "bob-ojeda",
]);

const oneSeasonWonders = new Set([
  "mike-hampton", "bernard-gilkey", "lance-johnson", "juan-lagares", "kevin-mitchell",
]);

const metsHallOfFamers = new Set([
  "tom-seaver", "david-wright", "dwight-gooden", "darryl-strawberry",
  "jerry-koosman", "edgardo-alfonzo", "mike-piazza", "jon-matlack",
  "keith-hernandez", "howard-johnson", "al-leiter", "lee-mazzilli",
  "tug-mcgraw", "mookie-wilson", "gary-carter", "cleon-jones",
  "ed-kranepool", "bud-harrelson", "jerry-grote", "ron-darling",
  "tommie-agee", "john-franco",
]);

for (const player of players) {
  const peakStart = playerPeaks[player.slug]?.start;
  const peakCenter = peakStart
    ? peakStart + (player.slug === "mike-hampton" ? 0 : 1)
    : undefined;
  const peakEra = peakCenter ? getEraForYear(peakCenter) : undefined;
  if (peakEra) player.era = peakEra.title;

  const accurateCategories: PlayerCategory[] = [];
  if (allTimeGreats.has(player.slug)) accurateCategories.push("all-time-great");
  if (worldSeriesChampions.has(player.slug)) accurateCategories.push("championship-hero");
  if (fanFavorites.has(player.slug)) accurateCategories.push("fan-favorite");
  if (oneSeasonWonders.has(player.slug)) accurateCategories.push("one-season-wonder");
  if (metsHallOfFamers.has(player.slug)) accurateCategories.push("mets-hall-of-fame");
  player.categories = accurateCategories;
}

export function getPlayer(slug: string) {
  return players.find((player) => player.slug === slug);
}

export function playerInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}
