const quizData = [
    {
        question: "In which year HTML was first proposed ?",
        a: "1998",
        b: "2000",
        c: "1995",
        d: "1990",
        correct: "d",
    },
    {
        question: "The fundamental HTML block is known as ",
        a: "HTML body",
        b: "HTML tags",
        c: "HTML attributes",
        d: "HTML elements",
        correct: "b",
    },
    {
        question: "Who is Known as the father of World Wide Web (WWW)?",
        a: "Robert Cailliau",
        b: "Tim Thompson",
        c: "Charles Darwin",
        d: "Tim Berners-Lee",
        correct: "d",
    },
	{
		 
        question: "Why so JavaScript and Java have similar name?",
        a: "JavaScript is a stripped-down version of Java",
        b: "JavaScript's syntax is loosely based on Java's",
        c: "They both originated on the island of Java",
        d: "None of the above",
        correct: "b",
    },
		{
        question: "Which of the following is not JavaScript Data Types?",
        a: "Undefined",
        b: "Number",
        c: "Boolean",
        d: "Float",
        correct: "d",
    },
		{
        question: "What is the original name of JavaScript?",
        a: "LiveScript",
        b: "EScript",
        c: "Mocha",
        d: "JavaScript",
        correct: "c",
    },
		{
        question: "Which company developed JavaScript?",
        a: "Netscape",
        b: "Bell Labs",
        c: "Sun Microsystems",
        d: " IBM",
        correct: "a",
    },
		{
        question: "Which of the following is correct about features of JavaScript?",
        a: "It can not Handling dates and time.",
        b: "JavaScript is a object-based scripting language.",
        c: "JavaScript is not interpreter based scripting language.",
        d: "All of the above",
        correct: "b",
    },
		{
        question: "What does javascript use instead of == and != ?",
        a: "It uses bitwise checking",
        b: "It uses === and !== instead",
        c: "It uses equals() and notequals() instead",
        d: "It uses equalto()",
        correct: "b",
    },
		{
        question: "What are the two basic groups of dataypes in JavaScript?",
        a: "Primitive",
        b: "Reference types",
        c: "All of the above",
        d: "None of the above",
        correct: "c",
    },
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});