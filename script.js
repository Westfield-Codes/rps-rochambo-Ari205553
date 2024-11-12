main();
function main(){
    let uChoice = 0; 
    let cChoice = 0;
    while (uChoice == cChoice){
       uChoice = userTurn();
       cChoice = cpuTurn(); 
       if (uChoice == cChoice){
        alert(" We both picked " + cChoice);
       }
    }
    findWinner(uChoice, cChoice);
}


function userTurn(){
    let choice = prompt(" enter r,p, or s");
    if (choice != "r" && choice != "p" && choice != "s"){
       alert("enter r,p, or s");
      return userTurn();
    }
   else return choice
}

function cpuTurn(){
  let choice = Math.floor(Math.random()*2);
  if (choice == 0) return "r";
  else if (choice == 1 )return "p";
  else return "s";
}



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
        alert ("you chose "+uChoice+" and I chose "+cChoice+". "+winner+" won.");
}
