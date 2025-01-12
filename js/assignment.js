"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.textContent = todos.join(", "); //answer 1st question of display array   
}

function updateAnswerTwo() {
    answerTwoEl.textContent = todos[2] || "No third item"; //answer 2nd question of what is the 3rd array value
}
function updateAnswerThree(){
   // console.log("in 3");
    removeLastValue();

    console.log(popValue);
}

function removeLastValue() {
    popValue = todos.pop();  // Removes the last value and stores it in popValue
    
}

function removeFirstValue() {
    shiftValue = todos.shift();  // Removes the first value and stores it in shiftValue
    
}

function addShiftAndPopValues() {
    todos.push(shiftValue);  // Adds the first removed item back to the start
    todos.push(popValue);       // Adds the last removed item back to the end
 
}

function updateAnswerFour() {
    console.log(todos,"in 4");
    answerFourEl.textContent = todos.join(", "); 
}

function reverseTodoList() {
    todos.reverse();  // Reverses the order of the items in the todos array
   /* render();  */   
}

function updateAnswerFive() {
    reverseTodoList();
    answerFiveEl.textContent = todos.join(", ");
}
function updateAnswerSix() {
    removeFirstValue();
    addShiftAndPopValues();
    answerSixEl.textContent = todos.join(", ");
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    updateAnswerThree();
    updateAnswerFour();
    updateAnswerFive();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function() {
    // Update this function
   // console.log(todos);
    
    render();
   // console.log(popValue);
})
