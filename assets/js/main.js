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