var person;
var point; 
welcomeMess();
function welcomeMess(){
    person = prompt("Please enter your name");
    if (person != null && person != "") {
        alert(`Welcome ${person}`);
        document.getElementById('welcome').textContent = `Welcome ${person}`;
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
    // console.log(point);
    alert(`${person} You have got ${point}/5`)
    document.getElementById('points').textContent = `${person} You have got ${point}/5`;
}

function Q1(){
    var q1 = prompt("q1. Areej's family name is Abbad, answer yes or no");
    if (q1 != null && (q1.toLocaleLowerCase() === "no" || q1.toLocaleLowerCase() === "n")) {
        point ++;
    }else if (q1 == null || q1 == "" || (q1.toLocaleLowerCase() != "yes" && q1.toLocaleLowerCase() != "y")) {
        alert('answer yes or no');
        Q1();
    }
};

function Q2(){
    var q2 = prompt("q2. Areej is a Civil engineer, answer yes or no");
    if (q2 != null && (q2.toUpperCase() === "YES" || q2.toUpperCase() === "Y")) {
        point ++;
    }else if (q2 == null || q2 == "" || (q2.toUpperCase() != "NO" && q2.toUpperCase() != "N")) {
        alert('answer yes or no');
        Q2();
    }
};

function Q3(){
    var q3 = prompt("q3. Areej worked as a windows developer, answer yes or no");
    if (q3 != null && (q3.toUpperCase() === "YES" || q3.toUpperCase() === "Y")) {
        point ++;
    }else if (q3 == null || q3 == "" || (q3.toUpperCase() != "NO" && q3.toUpperCase() != "N")) {
        alert('answer yes or no');
        Q3();
    }
};

function Q4(){
    q4 = prompt("q1. Areej worked for 2 years as a developer, answer yes or no");
    if (q4 != null && (q4.toLocaleLowerCase() === "no" || q4.toLocaleLowerCase() === "n")) {
        point ++;
    }else if (q4 == null || q4 == "" || (q4.toLocaleLowerCase() != "yes" && q4.toLocaleLowerCase() != "y")) {
        alert('answer yes or no');
        Q4();
    }
};

function Q5(){
    var q5 = prompt("q3. Areej Joined the caurse because she want to learn more about web development, answer yes or no");
    if (q5 != null && (q5.toUpperCase() === "YES" || q5.toUpperCase() === "Y")) {
        point ++;
    }else if (q5 == null || q5 == "" || (q5.toUpperCase() != "NO" && q5.toUpperCase() != "N")) {
        alert('answer yes or no');
        Q5();
    }
};
