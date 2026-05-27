function getComputerChoice() {

    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return options[randomNumber];
}


function playRound(human, computer) {


if (human === computer) {
    return "draw";
} else if (human === "rock" && computer ==="paper") {
    return "computer";
} else if (human === "rock" && computer ==="scissors") {
    return "human";
} else if (human === "paper" && computer ==="rock") {
    return "human";
} else if (human === "paper" && computer ==="scissors") {
    return "computer";
} else if (human === "scissors" && computer ==="rock") {
    return "computer";
} else if (human === "scissors" && computer ==="paper") {
    return "human";
}

}

let humanScore = 0
let computerScore = 0


const humanScoreDisplay=document.getElementById("humancount");
const computerScoreDisplay=document.getElementById("computercount");
const scoreTextDisplay=document.getElementById("text")

document.querySelector("#rock").addEventListener("click",function() {
        let computer = getComputerChoice();
        let ergebnis = playRound("rock",computer);
        console.log("You: rock | Computer:" , computer , "Ergebnis:", ergebnis);
        
        if (ergebnis === "human") {
            humanScore++;
            scoreTextDisplay.textContent = "You Win!!!!! 🎉";
        }else if (ergebnis === "computer"){
            computerScore++;
            scoreTextDisplay.textContent = "Computer wins! 😞";
        }else {
            scoreTextDisplay.textContent = "It is a draw 🤝";
        }
        
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        
        if (humanScore === 5) {
            scoreTextDisplay.textContent = "Du gewinnst das Spiel, gratuliere! 🏆"
            document.querySelector("#rock").disabled=true;
            document.querySelector("#paper").disabled=true;
            document.querySelector("#scissors").disabled=true;
            
        } else if ( computerScore === 5) {
            scoreTextDisplay.textContent = "Du hast leider verloren 💀"
            document.querySelector("#rock").disabled=true;
            document.querySelector("#paper").disabled=true;
            document.querySelector("#scissors").disabled=true;
            
    }});
    
    document.querySelector("#paper").addEventListener("click", function() {
        let computer=getComputerChoice();
        let ergebnis = playRound("paper",computer);
        console.log("You: paper | Computer:" , computer, "Ergebnis:", ergebnis)
        
        if (ergebnis === "human") {
            humanScore++;
            scoreTextDisplay.textContent = "You Win!!!!! 🎉";
        }else if (ergebnis === "computer"){
            computerScore++;
            scoreTextDisplay.textContent = "Computer wins! 😞";
        }else {
            scoreTextDisplay.textContent = "It is a draw 🤝";
        }

        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;

       if (humanScore === 5) {
            scoreTextDisplay.textContent = "Du gewinnst das Spiel, gratuliere! 🏆"
            document.querySelector("#rock").disabled=true;
            document.querySelector("#paper").disabled=true;
            document.querySelector("#scissors").disabled=true;
            
        } else if ( computerScore === 5) {
            scoreTextDisplay.textContent = "Du hast leider verloren 💀"
            document.querySelector("#rock").disabled=true;
            document.querySelector("#paper").disabled=true;
            document.querySelector("#scissors").disabled=true;
            
            
    }});
    document.querySelector("#scissors").addEventListener("click",function() {
        let computer=getComputerChoice();
        let ergebnis = playRound("scissors",computer);
        console.log("You: scissors | Computer:" , computer, "Ergebnis:", ergebnis)
        
        if (ergebnis === "human") {
            humanScore++;
            scoreTextDisplay.textContent = "You Win!!!!! 🎉";
        }else if (ergebnis === "computer"){
            computerScore++;
            scoreTextDisplay.textContent = "Computer wins! 😞";
        }else {
            scoreTextDisplay.textContent = "It is a draw 🤝";
        }
        
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
       
      if (humanScore === 5) {
            scoreTextDisplay.textContent = "Du gewinnst das Spiel, gratuliere! 🏆"
            document.querySelector("#rock").disabled=true;
            document.querySelector("#paper").disabled=true;
            document.querySelector("#scissors").disabled=true;
            
        } else if ( computerScore === 5) {
            scoreTextDisplay.textContent = "Du hast leider verloren 💀"
            document.querySelector("#rock").disabled=true;
            document.querySelector("#paper").disabled=true;
            document.querySelector("#scissors").disabled=true;
        
       

    }});

    document.querySelector("#again").addEventListener("click", function() {
            humanScore= 0;
            computerScore = 0;
            humanScoreDisplay.textContent = "O";
            computerScoreDisplay.textContent = "0";
            scoreTextDisplay.textContent = "Let's goooooo!";



            document.querySelector("#rock").disabled=false;
            document.querySelector("#paper").disabled=false;
            document.querySelector("#scissors").disabled=false;
    }
    )




    


