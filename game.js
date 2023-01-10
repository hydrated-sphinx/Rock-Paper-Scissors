/* 

Declare function for computer to randomly choose between rock paper and scissors 
Declare array of options for rock, paper and scissors within the function, 
how to randomly select an item from an array ? ? ? 
print out the output using console.log(computerChoice)

*/

var textArray = [
    "Rock",
    "Paper",
    "Scissors"
]

function getComputerSelection(randChoice) {

    // get random index value 
    const randomIndex = Math.floor(Math.random() * randChoice.length);

    // get random item 
    const item = randChoice[randomIndex];

    return item;

}

var computerSelection = getComputerSelection(textArray);
console.log(computerSelection); 

/*

Write a function that completes a single round of rock paper scissors 
Declare function with params playerSelection and computerSelection
prompt asking for rock paper or scissors to be input from player. must accept case insensitive answers e.g. "rOcK" 
if answer != "rock paper scissors" return alert that says "Answer must be rock, paper, or scissors."
return result for computerSelection function. 
compare playerSelection and computerSelection to decide the winner. 
scenario 1: both playerSelection and computerSelection are the same. output alert "It's A Draw! You both chose [print either computerSelection or playerSelection]."
paper beats rock, rock beats scissosrs and scissors beats paper. Is there a way to set up this 3-way hierarchy? 

Return a string that declares the winner "You lose/You win"

*/ 

function playerSelection() {
    var user = prompt("Enter Your Choice")
    if (user != null && user.toLowerCase() === "rock" || user.toLowerCase() === "paper" || user.toLowerCase() === "scissors") {
    document.getElementById("input").innerHTML =
    user + " is a good choice!";
    return user;
    }
    else {
        document.getElementById("input").innerHTML = ""
    }
}

function gameRound(playerSelection , computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's A Draw!")
    }
}

gameRound(playerSelection, computerSelection); 