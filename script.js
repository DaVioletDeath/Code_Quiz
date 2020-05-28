var startBtn = document.querySelector('#start-btn');
var playAgainBtn = document.querySelector('#playAgain-btn');
var landingEl = document.querySelector('#landing');
var endingEl = document.querySelector('#ending');
var questionEl = document.querySelector('#questions');
var choicesEl = document.querySelector('#choices');
var questionTextEl = document.querySelector('#question-text')
var timerEl = document.querySelector('#timer')


var questions =
    [
        {
            text: "How old is Javascript in years?",
            choices: [
                15,
                20,
                5,
                25
            ],
            answer: 3
        },
        {
            text: "What does the variable i in for loops stand for?",
            choices: [
                "an isometric variable",
                "a variable that assumes the values of the elements of an iterable object",
                "an isolated variable",
                "a variable that returns an if else statement"
            ],
            answer: 1
        },
        {
            text: "What does JSON stand for?",
            choices: [
                "JavaScript Object Notation",
                "Jasper Smith Opera Nolensville",
                "Joint Script Order Number",
                "Just Some Odd News"
            ],
            answer: 0
        },
        {
            text: "What does CSS stand for?",
            choices: [
                "Cansei der Sexy",
                "Cascading Style Sheet",
                "Count Susan Sarandon",
                "Cancel Student Submissions"
            ],
            answer: 1
        },
        {
            text: "What is the best programming language out there?",
            choices: [
                "Python",
                "Java",
                "C++",
                "C#"
            ],
            answer: 0
        },
    ];

choicesEl.addEventListener("click", function (event) {
    var element = event.target;
    var question = questions[cursor]
    if (element.getAttribute("class") === "item") {
        console.log("Make sure this is item");
        var id = parseInt(element.getAttribute("data-id"));
        if (question.answer === id) {
            console.log("Correct answer!")
            score++;
        } else {
            console.log("Incorrect answer!")
            timeLeft--;
        }
        cursor++;
        console.log('SCORE', score)
        renderQuestionData();
    }
});

function renderQuestionData() {
    var question = questions[cursor]
    choicesEl.innerHTML = "";
    questionTextEl.textContent = "1. " + question.text;
    // Display choices
    question.choices.forEach(function (choice, index) {
        var choiceItem = document.createElement("div");
        choiceItem.setAttribute("class", "item");
        choiceItem.setAttribute("data-id", index);
        choiceItem.textContent = choice;
        choicesEl.appendChild(choiceItem);
    });
}
var cursor = 0;
var score = 0;
var timeLeft = 75;
var interval;

function initializeTimer() {
    timeLeft = parseInt(timerEl.getAttribute("data-time"));
    interval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
        } else {
            console.log("END GAME INFINITY");
            landingEl.style.display = "none";
            // Show my first question
            questionEl.style.display = "none";
            endingEl.style.display = "flex";
            clearInterval(interval);
        }
    }, 1000);
}


startBtn.addEventListener("click", function (event) {
    landingEl.style.display = "none";
    // Show my first question
    questionEl.style.display = "flex";
    renderQuestionData();
    initializeTimer();

    // Allow the user to select from one of the choices
    // Provide a correct answer
    // Determine if the choice is equal to the selected answer
});