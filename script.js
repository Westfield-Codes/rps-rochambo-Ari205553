
var choices = ["r" ,"p", "s"];
var score = [0, 0];
var players = ["You", "I"]
//main();

function main(){
    let winner = "";
    let rounds = setRounds();
    for (let round = 1; round <= rounds; round++){
        alert(" round " + round);
        winner = rpsRound();
        score[winner]++;
    }
    let message = " score " + score[0] + " to " + score[1];
    if (score[0] > score[1]) alert( message + ". you win");
    else alert( message + ". you lose");
}


function setRounds(){
    let rounds = prompt(" How many rounds? ");
    if (rounds%2 == 0 || isNaN(rounds)){
        alert("Must be an odd number");
        return setRounds();
    }
    else return rounds;
    
}

function rpsRound(){
    let uChoice = 0;
    let cChoice =0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if(uChoice == cChoice) alert("we both chose " + cChoice);
    }
    let winner = findWinner(uChoice, cChoice);
    let win = players.indexOf(winner);
    return win;
}

function userTurn(){
    let choice = prompt(" enter r, p, or s");
    if (!choices.includes(choice)){
       alert("enter r, p, or s");

      return userTurn();
    }
   else return choice
}

function cpuTurn(){

   let choice = Math.floor(Math.random()*2);
    return choices[choice];
}



function findWinner(uChoice, cChoice){
    let winner = ""
    let winArray = [  ["r" , "p" , "I"], ["r", "s", "You"],  ["p", "s", "I"], ["p", "r", "You"],["s", "r", "I"], ["s", "p", "You"] ];
    for (let i = 0;  i < winArray.length; i++){
        if (winArray [i][0] == uChoice && winArray [i][1] == cChoice ){
            winner = winArray[i][2]; 
        }
    }
    alert ("you chose "+uChoice+" and I chose "+cChoice+". "+winner+" won.");
    return winner;
}
