const initialTiles = [
  {
    name: "kohli",
    url: require("./images/kohli.jpeg"),
    isRevealed: false,
  },
  {
    name: "dhoni",
    url: require("./images/dhoni.jpeg"),
    isRevealed: false,
  },
  {
    name: "rohit",
    url: require("./images/rohit.jpeg"),
    isRevealed: false,
  },
  {
    name: "rahul",
    url: require("./images/rahul.jpeg"),
    isRevealed: false,
  },
  {
    name: "gambhir",
    url: require("./images/gambhir.jpeg"),
    isRevealed: false,
  },
  {
    name: "yuvraj",
    url: require("./images/yuvraj.jpeg"),
    isRevealed: false,
  },
  {
    name: "sehwag",
    url: require("./images/sehwag.jpeg"),
    isRevealed: false,
  },
  {
    name: "sachin",
    url: require("./images/sachin.jpeg"),
    isRevealed: false,
  },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const getInitialTiles = function () {
  return shuffle(initialTiles.concat(initialTiles));
};

module.exports = { getInitialTiles };
