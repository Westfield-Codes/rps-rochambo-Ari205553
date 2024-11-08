main()
function main(){
    let uChoice = 0; 
    let cChoice = 0;
    if (uChoice == cChoice){
       uchoice = userTurn();
       cChoice = cpuTurn(); 
        alert(" We both chose" + uChoice);

    }
    else findWinner(uChoice, cChoice);
}


function userTurn(){
    let choice = prompt(" enter r,p, or s");
    if (choice != "r" && choice != "p" && choice != "s"){
       alert("enter r,p, or s");
       userTurn();
    }
    return choice;
}
function cpuTurn(){
    let choice = Math.floor(Math.random()*2);
    if (choice == 0) return "r";
    else if (choice == 1) return "p";
    else if (choice == 2) return "s";
}

//looks right, asked for help so should be correct//

function findWinner(uChoice, cChoice){
    alert(" finding winner ");
    let winner = "Undefined";
    if (uChoice == "r" ){
        if (cChoice =="s") winner = "player";
        else winner = "cpu";
    }
     if (uChoice == "s" ){
        if (cChoice =="p") winner = "player";
        else winner = "cpu";
    }
        if (cChoice == "r") winner = "player";
            else winner ="cpu";
        alert (" winner is " + winner);
}
