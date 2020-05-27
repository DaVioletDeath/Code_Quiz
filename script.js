var startBtn = document.querySelector("#start-btn");
var landingEl = document.querySelector("#landing");
var questionEl = document.querySelector('#questions');
var choicesEl = document.querySelector('#choices');
var questionTextEl = document.querySelector('#question-text')

var question = {
    text: "How old is Javascript in years?",
    choices: [
        10,
        15,
        5,
        25
    ],
    answer: 3
};

var question = {
    text: "How old is Javascript in years?",
    choices: [
        10,
        15,
        5,
        25
    ],
    answer: 3
};

var question = {
    text: "How old is Javascript in years?",
    choices: [
        10,
        15,
        5,
        25
    ],
    answer: 3
};

var question = {
    text: "How old is Javascript in years?",
    choices: [
        10,
        15,
        5,
        25
    ],
    answer: 3
};

var question = {
    text: "How old is Javascript in years?",
    choices: [
        10,
        15,
        5,
        25
    ],
    answer: 3
};

choicesEl.addEventListener("click", function(event) {
    var element = event.target;
    if (element.getAttribute("class") === "item") {
        console.log("Make sure this is item");
        var id = parseInt(element.getAttribute("data-id"));
        if (question.answer === id) {
            console.log("Correct answer!")
            score++;
        } else {
            console.log("Incorrect answer!")
        }
        cursor++;
        renderQuestionData();
    }
});

function renderQuestionData() {
    var question = questions(cursor)
    questionTextEl.textContent = "1. " + question.text;
    // Display choices
    question.choices.forEach(function(choice) {
        var choiceItem = document.createElement("div");
        choiceItem.setAttribute("class", "item");
        choiceItem.setAttribute("data-id", index);
        choiceItem.textContent = choice;
        choicesEl.appendChild(choiceItem);
    });
}

var score = 0

function initializeTimer () {
    timeLeft = parseInt(timerEl.getAttribute("data-time"));
    interval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
    }, 1000);
}


startBtn.addEventListener("click", function (event) {
    landingEl.style.display = "none";
    // Show my first question
    questionEl.style.display = "flex";
    // Display the question with the question number
   renderQuestionData();
    initializeTimer();
    
    // Allow the user to select from one of the choices
    // Provide a correct answer
    // Determine if the choice is equal to the selected answer
});