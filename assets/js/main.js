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

let cardFirstNameEl = document.querySelector("#cardFirstName");
let cardLastNameEl = document.querySelector("#lastName");
let cardStageNameEl = document.querySelector("#stageName");
let cardAlbumsEl = document.querySelector("#albums");
let cardSinglesEl = document.querySelector("#top10singles");
let cardNetWorthEl = document.querySelector("#netWorth");
let cardAgeEl = document.querySelector("#cardAge")
let cardFamousQuoteEl = document.querySelector("#famousQuote");
let cardImageURLEl = document.querySelector("#imageURL");
let inputFormElement = document.querySelector("#inputform");

class Card {
    constructor(firstName, lastName, stageName, albums, top10singles, netWorth, age, famousQuote, imageURL) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.stageName = stageName;
        this.albums = albums;
        this.top10singles = top10singles;
        this.netWorth = netWorth;
        this.age = age;
        this.famousQuote = famousQuote;
        this.imageURL = imageURL;
    }
}
let outputSection = document.querySelector("#outputSection");
let cardOutputSection = document.querySelector("#paniniCardOutput");
let outputName = document.querySelector(".outputName");
let outputStageName = document.querySelector(".stageName");
let outputAlbums = document.querySelector(".outputAlbums");
let outputSingles = document.querySelector(".outputSingles");
let outputNetWorth = document.querySelector(".outputNetWorth");
let outputAge = document.querySelector(".outputAge");
let outputQuote = document.querySelector(".outputQuote");

function createCard(event) {
    event.preventDefault();

    console.log(cardImageURLEl.value)
    const newCard = new Card(cardFirstNameEl.value, cardLastNameEl.value, cardStageNameEl.value, cardAlbumsEl.value, cardSinglesEl.value, cardNetWorthEl.value, cardAgeEl.value, cardFamousQuoteEl.value, cardImageURLEl.value)

    console.log(newCard.imageURL)

    inputFormElement.style.display = "none";
    outputSection.style.display = "block";
    cardOutputSection.style.backgroundImage = `url(${newCard.imageURL})`;
    outputName.textContent = `${newCard.firstName} ${newCard.lastName}`;
    outputStageName.textContent = `${newCard.stageName}`;
    outputAlbums.textContent = `${newCard.albums}`;
    outputSingles.textContent = `${newCard.top10singles}`;
    outputNetWorth.textContent = `${newCard.netWorth} €`;
    outputAge.textContent = `${newCard.age}`;
    outputQuote.textContent = `${newCard.famousQuote};`
}

function resetForm() {
    document.location.reload();
}