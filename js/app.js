"use strict";

var person;
var point; 
var iqPoints;
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

//// about me que
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

////// IQ test
function startIQTest(){
    iqPoints = 0;
    iQTestQue("complete the series => 4 - 7 - 12 - 15 - 20  - ...", 23 )
    iQTestQue("complete the series => 2 - 0 - 4 - 0 - 8 - 0 - ...", 16 )
    iQTestQue("complete the series => 18 - 10 - 6 - 4 - ...", 3 )
    iQTestQue("complete the series => 1024 - 512 - 256 - 128 - ...", 64 )
    iQTestQue("complete the series => 2 - 4 - 8 - 16 - ...", 32 )
    iQTestQue("complete the series => 2 - 5 - 11 - ...", 29 )
    console.log(iqPoints);
}

function iQTestQue(str,correctAnswer){
    let q = prompt(str);
    let i = 0;
    while(q != correctAnswer && i < 4){
        alert(`wrong answer, you have ${3-i} attempts`)
        q = prompt(str);
        i ++
    }
    if(correctAnswer == q){
        iqPoints ++
        alert(`Good Job!, your points ${iqPoints}`)
    }
}

