"use strict";

var person;
var point;
welcomeMess();
function welcomeMess() {
    person = prompt("Please enter your name");
    if (person != null && person != "") {
        alert(`Welcome ${person} to The Guessing Game`);
        document.getElementById('welcome').textContent = `${person}  Welcome  to`.toLocaleUpperCase();
    } else {
        welcomeMess();
    }
}

//// about me que
function beginTheGame() {
    console.log("start")
    alert('answer yes or no');
    point = 0;
    let queArr = ["q1. Areej's family name is Abbad, answer yes or no", "q2. Areej is a Civil engineer, answer yes or no", "q3. Areej worked as a windows developer, answer yes or no", "q4. Areej worked for 2 years as a developer, answer yes or no", "q5. Areej Joined the caurse because she want to learn more about web development, answer yes or no"]
    let ansArr = ['No', 'Yes', 'Yes', 'No', 'Yes']
    for (var i = 0; i < queArr.length; i++) {
        que(queArr[i], ansArr[i]);
    }
    console.log(point);
    alert(`${person} You have got ${point}/5`)
    document.getElementById('points').textContent = `${person} You have got ${point}/5`;
}

function que(str, answer) {
    var q = prompt(str);
    if (answer === 'No') {
        answerIsNo(que, q);
    } else {
        answerIsYes(que, q);
    }
};

function answerIsYes(qName, answer) {
    if (answer != null && (answer.toUpperCase() === "YES" || answer.toUpperCase() === "Y")) {
        point++;
    } else if (answer == null || answer == "" || (answer.toUpperCase() != "NO" && answer.toUpperCase() != "N")) {
        alert('answer yes or no');
        qName();
    }
};

function answerIsNo(qName, answer) {
    if (answer != null && (answer.toLocaleLowerCase() === "no" || answer.toLocaleLowerCase() === "n")) {
        point++;
    } else if (answer == null || answer == "" || (answer.toLocaleLowerCase() != "yes" && answer.toLocaleLowerCase() != "y")) {
        alert('answer yes or no');
        qName();
    }
}

////// IQ test
function startIQTest() {
    point = 0;
    let queArr = ["complete the series => 4 - 7 - 12 - 15 - 20  - ...", "complete the series => 2 - 0 - 4 - 0 - 8 - 0 - ...", "complete the series => 18 - 10 - 6 - 4 - ...", "complete the series => 1024 - 512 - 256 - 128 - ...", "complete the series => 2 - 4 - 8 - 16 - ...", "complete the series => 2 - 5 - 11 - ..."]
    let ansArr = [23, 16, 3, 64, 32, 29]
    for (var i = 0; i < queArr.length; i++) {
        testQue(queArr[i], ansArr[i]);
    }
    alert(`${person} You have got ${point}/6`)
    document.getElementById('points-iq').textContent = `${person} You have got ${point}/6`;
    console.log(point);
}

function testQue(str, correctAnswer) {
    let q = prompt(str);
    let i = 0;
    while (q != correctAnswer && i < 3) {
        alert(`wrong answer, you have ${3 - i} attempts`)
        q = prompt(str);
        i++
    }
    if (correctAnswer == q) {
        point++
        alert(`${person}, Good Job!, your points ${point}`)
    } else {
        alert(`${person}, The correct answer is ${correctAnswer}`)
    }
}

function MultCorrectAnsQue(str, correctAnswer) {
    let q = prompt(str);
    console.log(correctAnswer);
    let i = 0;
    while (correctAnswer.includes(q.toLocaleLowerCase()) == false && i < 5) {
        alert(`wrong answer, you have ${5 - i} attempts`)
        q = prompt(str);
        i++
    }
    if (correctAnswer.includes(q.toLocaleLowerCase())) {
        point++
        alert(`${person}, Good Job!, I love ${correctAnswer.join(' + ')} => your points ${point}`)
    } else {
        alert(`${person}, The correct answer is ${correctAnswer.join(' + ')} `)
    }
}

/// Level2
function startGameLevel2() {
    console.log('hi')
    point = 0;
    let queArr = ["How many cats do I have", "How many brothers do I have", "How many sisters do I have", "How many years of experience in software engineering do I have", "How old am I", "How many languages I can speech"]
    let ansArr = [1, 1, 3, 1, 26, 2]
    for (var i = 0; i < queArr.length; i++) {
        testQue(queArr[i], ansArr[i]);
    }
    alert('The final question!');
    MultCorrectAnsQue("What are my favorite colors, guess one", ['black', 'blue', 'white', 'green'])
    console.log(point);
    if (point > 3) {
        alert(`${person}, Done you have got ${point}/7, too high`)
    } else {
        alert(`${person}, Done you have got ${point}/7, too low`)
    }
    document.getElementById('points-2').textContent = `${person} You have got ${point}/7`;
}

