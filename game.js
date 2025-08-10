console.log("Hello world");

let humanScore=0;
let computerScore=0;
let i=0;

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

function getHumanChoice(){
    let respuestaHumano;
    respuestaHumano= prompt("Cuál será su opción:")
    console.log("La decisión del humano ha sido: "+respuestaHumano);
    return respuestaHumano;
}

function playGround(humanChoice,computerChoice){
    humanChoiceMinuscula = humanChoice.toLowerCase();
    console.log(humanChoiceMinuscula+ " contra " + computerChoice);
    if (humanChoiceMinuscula===computerChoice){
        console.log("Empate");
        return null;
    }
    if (humanChoiceMinuscula==="scissors" && computerChoice==="rock"){
        console.log("Perdiste");
        computerScore++;
    }
    if (humanChoiceMinuscula==="rock" && computerChoice==="paper"){
        console.log("Perdiste");
        computerScore++;
    }
    if (humanChoiceMinuscula==="paper" && computerChoice==="scissors"){
        console.log("Perdiste");
        computerScore++;
    }
    else{
        console.log("Ganaste");
        humanScore++;
    }

}


for(i=0; i<5; i++){
    let humano= getHumanChoice();
    let computadora= getComputerChoice()
    playGround(humano, computadora);
}

console.log("El juego ha terminado, el puntaje quedó: " + humanScore + " - " + computerScore);







