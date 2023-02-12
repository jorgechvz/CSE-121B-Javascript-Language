const array = ['one','two','three'];

const newArray = array.map(function (step) {
    return `<li>${step}</li>`;
});

document.querySelector("#myList").innerHTML = newArray.join();


const letterGrade = ['A','B','A'];

function convertGrade(grade){
    let points = 0

    if (grade === "A"){
        points = 4;
    }
    else if (grade === "B"){
        points = 3;
    }
    return points
}

const pointsGrade = letterGrade.map(convertGrade);

const gpaTotal = pointsGrade.reduce((total, item) => total + item)/pointsGrade.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const fruitSixCharacteres = fruits.filter((newFruits) => newFruits.length < 6);

console.log(fruitSixCharacteres);

const numbers = [12, 34, 21, 54];
const luckNumber = 21;
let getLuckNumber = numbers.indexOf(luckNumber);

console.log(getLuckNumber);