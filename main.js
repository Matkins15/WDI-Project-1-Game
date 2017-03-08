var tiles = [
  {value: "U.S. States"},
  {value: "Music"},
  {value: "Name the Movie"},
  {value: "Food"},
  {value: "Countries"},

  {tiles: },
  {tiles: "He won a Grammy for 'Best Pop Vocal Album' in 2015.", answer: "Sam Smith", value: 100},
  {tiles: " 'To infinity and beyond...' ", answer: "Toy Story", value: 100},
  {tiles: "To be embarrased is to have this 'on one\'s face'.", answer: "Egg", value: 100},
  {tiles: "What is the largest country in South America?", answer: "Brazil", value: 100},


  {tiles: "This state's name begins with two vowels.", answer: "Iowa", value: 200},
  {tiles: "In 2015, this artist performed during the Superbowl half time show.", answer: "Katy Perry", value: 200},
  {tiles: "Tom Cruise said 'show me the money' in this 1996 film.", answer: "Jerry Maguire", value: 200},
  {tiles: "Hot out of the oven is one of these stuffed pizza turnovers of Naples.", answer: "Calzone", value: 200},
  {tiles: "Ottawa is this country's capital.", answer: "Canada", value: 200},

  {tiles: "In 1968, gold was officially named this state's mineral.", answer: "Alaska", value: 300},
  {tiles: "This artist's real name is Stacy Ferguson.", answer: "Fergie", value: 300},
  {tiles: " 'Mama always said life was like a box of chocolates. You never know what you're gonna get.' ", answer: "Forrest Gump", value: 300},
  {tiles: "This is believed to be the only food that never spoils.", answer: "Honey", value: 300},
  {tiles: "What country has more volcanoes than any other?", answer: "Indonesia", value: 300},

  {tiles: "Around 1,000 official reports of UFOs are made each year in this state.", answer: "New Mexico", value: 400},
  {tiles: "Rihanna and Kanye West recorded the song 'FourFiveSeconds' with this legendary English songwriter.", answer: "Paul McCartney", value: 400},
  {tiles: " 'This is Sparta!' ", answer: 300, value: 400},
  {tiles: "Some recipes for this sweet treat call for beets instead of food coloring.", answer: "Red Velvet Cake", value: 400},
  {tiles: "What is Europe's most mountainous country?", answer: "Switzerland", value: 400},


  {tiles: "This state was the first state to ratify the U.S.constitution. It did so on December 7, 1787.", answer: "Delaware", value: 500},
  {tiles: "Released in 1982, this Michael Jackson album sold more copies than any others he released.", answer: "Thriller", value: 500},
  {tiles: " 'Why so serious?' ", answer: "The Dark Knight", value: 500},
  {tiles: "Georgia is the largest U.S. producer of this popular nut; often processed into butter.", answer: "Peanut", value: 500},
  {tiles: "In what country is the Valley of the Kings located.", answer: "Egypt", value: 500},
]

for (var i = 0; i < tiles.length; i++) {
  var box = document.createElement("box");
   document.body.appendChild(box);
}
