const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;
let grade;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log("Welcome " + candidateName + "!");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
  questions = ["\n1) Who was the first American woman in space? ", "\n2) True or false: 5 kilometer == 5000 meters? ", "\n3) (5 + 3)/2 * 10 = ? ", "\n4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "\n5) What is the minimum crew size for the ISS? "];
  correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

  grade = 0;
  for(i = 0; i < 5; i++){
    console.log(questions[i]);
    candidateAnswer = input.question(question);
    if(candidateAnswer.toUpperCase() === correctAnswers[i].toUpperCase()){
      grade++;
    }
    //console.log("debug: " + questions[i] + " " + questions[i].toUpperCase() + " " + correctAnswers[i] + " " + correctAnswers[i].toUpperCase())
    console.log("Correct answer: " + correctAnswers[i]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let finalgrade;
  let status;
  finalgrade = grade/5*100;
  console.log("\n>>> Overall Grade: " + finalgrade + "% (" + grade + " of 5 responses correct) <<<");
  if(grade >= 4){
    status = "PASSED";
  } else {
    status = "FAILED";
  }
  console.log(">>> Status: " + status + " <<<");
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};