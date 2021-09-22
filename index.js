// ex14: club everything to make the game

let readlineSync = require("readline-sync");
let userName = readlineSync.question("What's your name ? ");
console.log("Welcome " + userName + " to HOW WELL DO YOU KNOW NARESH ?");

if (!readlineSync.keyInYN("Do you want to play this game?")) {
  // The process will exit if y is not pressed
  process.exit();
}

let score = 0;

function playGame(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right Answer");
    score = score + 1;
  } else {
    console.log("Wrong Answer");
    score = score;
  }
  console.log("Your score is " + score);
}
// Making an array of objects containing key value pairs of questions and answers
var qnaList = [
  {
    question: "Where do i live? ",
    answer: "Gurgaon",
  },
  {
    question: "Which branch of Engineering did i study in college? ",
    answer: "Civil Engineering",
  },
  {
    question: "How old am i? ",
    answer: "31",
  },
  {
    question: "Which bike do i ride? ",
    answer: "Hero Xpulse",
  },
  {
    question: "Where did i travelled last? ",
    answer: "Ladakh",
  },
];
//Making a for loop & calling function with differnt questions and answers

for (let i = 0; i < qnaList.length; i++) {
  playGame(qnaList[i].question, qnaList[i].answer);
}

console.log("Your final score is " + score);
