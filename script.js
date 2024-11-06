main()
function main(){
    let uChoice = 0; 
    let cChoice = 0;
    if (uChoice == cChoice){
       uchoice = userTurn();
       cChoice = cpuTurn(); 
        alert("We both chose" + uChoice);

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