 
let playerScore=0;
let computerScore=0;
let playerSelection=0;
let computerSelection=0;


function computerPlay(){
    const choices=["rock", "paper","scissors"];
    let random=Math.floor(Math.random()*choices.length);
    let compChoice=choices[random];
    console.log(compChoice);
}

let userInput=prompt("Enter a choice btwn:Rock,Paper,Scissors").toLowerCase();
function playRound(playerSelection,computerSelection){
     playerSelection=userInput;
     computerSelection=computerPlay();
    //  compare computerSelection and playerSelection

     if(playerSelection === "rock" && computerSelection === "rock"){
        return "Its a tie"
     }else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore = +1;
        return "You lose, paper covers rock"
     
     }else if(playerSelection  === "paper" && computerSelection === "scissors"){
        computerScore = +1;
        return "You lose, scissors cut paper";
       
     }else if(playerSelection  === "rock" && computerSelection  === "scissors"){
        playerScore= +1;
        return "You Win, rock crushes scissors";
        playerScore= +1;
      
     }else if(playerSelection === "scissors" && computerSelection ==="rock"){
        computerScore = +1;
        return "You lose, rock crushes scissors";
        
     }else if(playerSelection  === "paper" && computerSelection === "rock"){
        playerScore= +1;
        return "You win, paper covers rock"
       
     }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore= +1;
         return "You win, scissors cut paper";
        
     
     }
    };
    
function game(){

console.log(playRound(playerSelection,computerSelection))
console.log(playRound(playerSelection,computerSelection))
console.log(playRound(playerSelection,computerSelection))
console.log(playRound(playerSelection,computerSelection))
console.log(playRound(playerSelection,computerSelection))

if(playerScore > computerScore){
    console.log("Player wins"); 
    
}else if(playerScore < computerScore){
    console.log("Comp wins")

}else{
    console.log("Its a tie");
}
}
game();
       
