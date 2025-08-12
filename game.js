let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

function getComputerChoice(){
    let respuestaCompu;
    respuestaCompu= Math.random();
    if(respuestaCompu>=0 && respuestaCompu <0.333){
        console.log("La decisión del robot ha sido: rock");
        return "rock";
    }
    else if (respuestaCompu>=0.334 && respuestaCompu<0.666){
        console.log("La decisión del robot ha sido: paper");
        return "paper";
    }
    else{
        console.log("La decisión del robot ha sido: scissors");
        return "scissors";
    }
}

function displayResult(message) {
    resultDiv.textContent = message;
}

function displayScore() {
    scoreDiv.textContent = `Puntaje: Humano ${humanScore} - Computadora ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceMinuscula = humanChoice.toLowerCase();
    if (humanChoiceMinuscula!=="rock" && humanChoiceMinuscula!=="paper" && humanChoiceMinuscula!=="scissors"){
        console.log("Opción inválida, por favor ingrese rock, paper o scissors");
        return;
    }
    console.log(humanChoiceMinuscula+ " contra " + computerChoice);
    if (humanChoiceMinuscula===computerChoice){
        console.log("Empate");
        return null;
    }
    if (
        (humanChoiceMinuscula==="scissors" && computerChoice==="rock") ||
        (humanChoiceMinuscula==="rock" && computerChoice==="paper") ||
        (humanChoiceMinuscula==="paper" && computerChoice==="scissors")
    ){
        computerScore++;
        displayResult(`Perdiste: ${computerChoice} vence a ${humanChoiceMinuscula}`);
    } else {
        humanScore++;
        displayResult(`Ganaste: ${humanChoiceMinuscula} vence a ${computerChoice}`);
    }

    displayScore();

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            displayResult("¡Felicidades! Ganaste el juego.");
        } else {
            displayResult("La computadora ganó el juego.");
        }
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        scoreDiv.textContent += " (Juego terminado)";
    }
}

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

// Mostrar puntaje inicial
displayScore();








