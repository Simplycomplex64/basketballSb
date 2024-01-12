let homeScore = document.getElementById("home-score");
let visitorsScore = document.getElementById("visitors-score");

let homeScoreValue = 0;
let visitorsScoreValue = 0;

function homePlus1(){
    homeScoreValue += 1;
    homeScore.innerText = homeScoreValue;
}

function homePlus2(){
    homeScoreValue += 2;
    homeScore.innerText = homeScoreValue;
}

function homePlus3(){
    homeScoreValue += 3;
    homeScore.innerText = homeScoreValue;
}

//visitor score 

function visitorsPlus1(){
    visitorsScoreValue += 1;
    visitorsScore.innerText = visitorsScoreValue;
}

function visitorsPlus2(){
    visitorsScoreValue += 2;
    visitorsScore.innerText = visitorsScoreValue;
}

function visitorsPlus3(){
    visitorsScoreValue += 3;
    visitorsScore.innerText = visitorsScoreValue;
}



 