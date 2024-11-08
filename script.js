var choices = ["r" ,"p", "s"];
main()
function main(){
    let uChoice = 0; 
    let cChoice = 0;
    while (uChoice == cChoice){
       uChoice = userTurn();
       cChoice = cpuTurn(); 
       if (uChoice == cChoice){
        alert(" We both chose " + uChoice);
       }
    }
    findWinner(uChoice, cChoice);
}


function userTurn(){
    let choice = prompt(" enter r,p, or s");
    if (!choices.includes(choice)){
       alert("enter r,p, or s");
     return  userTurn();
    }
    return choice;
}
function cpuTurn(){
   let choice = Math.floor(Math.random()*2);
    return choices[choice];
   
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
