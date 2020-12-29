"use strict";

var person;
var point; 
welcomeMess();
function welcomeMess(){
    person = prompt("Please enter your name");
    if (person != null && person != "") {
        alert(`Welcome ${person} to The Guessing Game`);
        document.getElementById('welcome').textContent = `${person}  Welcome  to`.toLocaleUpperCase();
    }else{
        welcomeMess();
    }
}

function startGame(){
    console.log("start")
    alert('answer yes or no');
    point = 0;
    Q1();
    Q2();
    Q3();
    Q4();
    Q5();
    console.log(point);
    alert(`${person} You have got ${point}/5`)
    document.getElementById('points').textContent = `${person} You have got ${point}/5`;
}

function Q1(){
    var q1 = prompt("q1. Areej's family name is Abbad, answer yes or no");
    answerIsNo(Q1,q1);
};

function Q2(){
    var q2 = prompt("q2. Areej is a Civil engineer, answer yes or no");
    answerIsYes(Q2,q2);
};

function Q3(){
    var q3 = prompt("q3. Areej worked as a windows developer, answer yes or no");
    answerIsYes(Q3,q3);
};

function Q4(){
    var q4 = prompt("q4. Areej worked for 2 years as a developer, answer yes or no");
    answerIsNo(Q4, q4);
};

function Q5(){
    var q5 = prompt("q5. Areej Joined the caurse because she want to learn more about web development, answer yes or no");
    answerIsYes(Q5, q5);
};

function answerIsYes(qName, answer){
    if (answer != null && (answer.toUpperCase() === "YES" || answer.toUpperCase() === "Y")) {
        point ++;
    }else if (answer == null || answer == "" || (answer.toUpperCase() != "NO" && answer.toUpperCase() != "N")) {
        alert('answer yes or no');
        qName();
    }
};

function answerIsNo(qName, answer){
    if (answer != null && (answer.toLocaleLowerCase() === "no" || answer.toLocaleLowerCase() === "n")) {
        point ++;
    }else if (answer == null || answer == "" || (answer.toLocaleLowerCase() != "yes" && answer.toLocaleLowerCase() != "y")) {
        alert('answer yes or no');
        qName();
    }
}

