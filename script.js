
var choices = ["r" ,"p", "s"];
main();
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

      return userTurn();
    }
   else return choice
}

function cpuTurn(){

   let choice = Math.floor(Math.random()*2);
    return choices[choice];
}



function findWinner(uChoice, cChoice){
    alert(" finding winner ");

    let winner = ""
    let winArray = [  ["r" , "p" , "I"], ["r", "s", "you"],  ["p", "s", "I"], ["p", "r", "You"],["s", "r", "I"], ["s", "p", "You"] ];
        alert ("you chose "+uChoice+" and I chose "+cChoice+". "+winner+" won.");
        for (let i = 0;  i < winArray.length; i++){
            if (winArray [i][0] == uChoice && winArray [i][1] == cChoice ){
                winner = winArray[i][2];
               
            }
        }
     
        alert ("you chose "+uChoice+" and I chose "+cChoice+". "+winner+" won.");
}
