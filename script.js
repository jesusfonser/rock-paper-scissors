/*

PASO 1:

Crea función getComputerChoice
    Haz que devuelva uno de estos string de manera aleatoria: rock paper scissors
    Haz console.log al valor devuelto por getComputerChoice

PASO 2:

    Crea función getHumanChoice
    Pide input al usuario con prompt
    Función devuelve rock, paper o scissors dependiendo de lo que introduzca el usuario
    Haz console.log al valor devuelto por la función

PASO 3:

Crea variable humanScore. Inicialízala con valor 0
Crea variable computerScore. Inicialízala con valor 0

PASO 4:

Crea función playRound. Sus parámetros son humanChoice y computerChoice
    Parámetro humanChoice debe ser case-insensitive
    Función hará console.log para anunciar al ganador de la ronda así:
        "You win/lose! (elección ganadora) beats (elección perdedora)"
    Aumenta en 1 humanScore o computerScore dependiendo de quién ganó la ronda


PASO 5:

Crea función playGame
    Invoca playRound 5 veces
    Muestra puntuación de ordenador y jugador
    Una vez se haya hecho playRound 5 veces, declara ganador


-----PSEUDOCÓDIGO------


*/

let nVictorias = document.querySelector("#puntosJugador");
let nDerrotas = document.querySelector("#puntosPC");
let nEmpates = document.querySelector("#empates");
let dialogo = document.querySelector("#dialogo");

function getComputerChoice(){
    let numDecision = Math.floor(Math.random()*3+1)
    switch (numDecision){
        case 1:
            return "rock"
            break
        case 2:
            return "paper"
            break
        case 3:
            return "scissors"
            break
    }
}

function getHumanChoice(){
    let userDecision = prompt("Escribe 'rock', 'paper' o 'scissors'").toLowerCase()
    switch(userDecision){
        case "rock":
            return "rock"
            break
        case "paper":
            return "paper"
            break
        default:
            return "scissors"
            break
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        nEmpates.textContent = parseInt(nEmpates.textContent) + 1;
        dialogo.textContent = "¡Empate! Habéis elegido lo mismo..."
    }

    else if (humanChoice === "scissors" && computerChoice === "rock"){
        nDerrotas.textContent = parseInt(nDerrotas.textContent) + 1;
        dialogo.textContent = `¡Has perdido! Tu rival eligió Rock.`
        computerScore += 1
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        nVictorias.textContent = parseInt(nVictorias.textContent) + 1;
        humanScore += 1
        dialogo.textContent = `¡Has ganado! Tu rival eligió Paper.`
    }

    else if (humanChoice === "paper" && computerChoice === "scissors"){
        nDerrotas.textContent = parseInt(nDerrotas.textContent) + 1;
        computerScore += 1
        dialogo.textContent = `¡Has perdido! Tu rival eligió Scissors.`
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        nVictorias.textContent = parseInt(nVictorias.textContent) + 1;
        humanScore += 1
        dialogo.textContent = `¡Has ganado! Tu rival eligió Rock.`
    }

    else if (humanChoice === "rock" && computerChoice === "paper"){
        nDerrotas.textContent = parseInt(nDerrotas.textContent) + 1;
        computerScore += 1
        dialogo.textContent = `¡Has perdido! Tu rival eligió Paper.`
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        nVictorias.textContent = parseInt(nVictorias.textContent) + 1;
        humanScore += 1
        dialogo.textContent = `¡Has ganado! Tu rival eligió Scissors.`
    }

    if (humanScore === 5){
        let ganador = document.createElement("p");
        ganador.textContent = "¡¡HAS GANADO!!";
        dialogo.appendChild(ganador);
    }
    else if (computerScore === 5){
        let perdedor = document.createElement("p");
        perdedor.textContent = "Has perdido. Que pena...";
        dialogo.appendChild(perdedor);
    }
}

function playGame(){
    console.log("¡Vamos a jugar al piedra, papel o tijera!")
        playRound(getHumanChoice(), getComputerChoice())
    
    console.log("Y el ganador es...")

    if (computerScore > humanScore){
        console.log("¡Tu rival! Lo siento, has perdido...")
    }
    else if(computerScore < humanScore){
        console.log ("¡Tú! ¡Has ganado!")
    }
    else{
        console.log("¡Empate! Pues vaya...")
    }
}

let botones = document.querySelectorAll("button")
botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        let eleccion = boton.textContent.toLowerCase();
        playRound(eleccion, getComputerChoice());
    })
})

