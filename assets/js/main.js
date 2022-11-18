// =====================================
// 1_1
// =====================================

class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    };
}

const regularBall = new Ball();
console.log(regularBall.ballType)


const superBall = new Ball("super");
console.log(superBall.ballType)

// =====================================
// 1_2
// =====================================

class Person {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
        this.info = () => {
            return console.log(`${firstName} is ${age} years old`);
        }
    }

}

const person1 = new Person("Eliza", 23)
person1.info();

// =====================================
// 1_3
// =====================================

let firstNameEl = document.querySelector("#firstName");
let ageEl = document.querySelector("#age");
let resultText = document.querySelector("#result");
let passedExam = document.querySelector("#examResult");
let submitButton = document.querySelector("#submitButton");

class examResults extends Person {
    constructor(firstName, age, examResult) {
        super(firstName, age)
        this.examResult = examResult;
    }
}

let newExamResults;

function writeResults() {
    newExamResults = new examResults(firstNameEl.value, ageEl.value, passedExam.checked)
    console.log(`${newExamResults.firstName}, ${newExamResults.age} years old, ${newExamResults.examResult}.`)
    let newLi = document.createElement("li");
    if (!passedExam.checked) {
        newLi.style.color = "red";
    }
    newLi.innerHTML = `${newExamResults.firstName}, ${newExamResults.age} years old.`
    resultText.appendChild(newLi);
}


// =====================================
// 3_15
// =====================================
