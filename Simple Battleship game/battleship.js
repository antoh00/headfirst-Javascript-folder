//ship location provided by game
var Location1 = 3;
var Location2 = 2;
var Location3 = 5;

//variables to work with the game

var guess;
var hits = 0;
var guesses = 0; 
var isSunk = false;

while(isSunk == false){
    guess = prompt("Ready, Aim, Fire! (enter a number 0 -6)");
    if (guess<0 || guess > 7){
        alert("Ënter a valid number");
    }
        else{
        guesses = guesses + 1;
            if(hits!=3){
                if (guess == Location1 || guess == Location2 || guess == Location3 ) {
            
                hits = hits + 1;
                }
                
                
            else{
                alert("You missed");
            }
            }
            else{
                alert("You sank my ship");
                isSunk = true;
            }
        }
    
        
}


var result = "You sank " + hits + " ships in " + guesses + " Attempts and your accuracy is " + (hits/guesses);
alert(result);