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
    que("q1. Areej's family name is Abbad, answer yes or no",'No');
    que("q2. Areej is a Civil engineer, answer yes or no",'Yes');
    que("q3. Areej worked as a windows developer, answer yes or no",'Yes');
    que("q4. Areej worked for 2 years as a developer, answer yes or no",'No');
    que("q5. Areej Joined the caurse because she want to learn more about web development, answer yes or no",'Yes');
    console.log(point);
    alert(`${person} You have got ${point}/5`)
    document.getElementById('points').textContent = `${person} You have got ${point}/5`;
}

function que(str,answer){
    var q = prompt(str);
    if(answer === 'No'){
        answerIsNo(que,q);
    }else{
        answerIsYes(que,q);
    }
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

