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
    }

    else if (humanChoice === "scissors" && computerChoice === "rock"){
        nDerrotas.textContent = parseInt(nDerrotas.textContent) + 1;
        computerScore += 1
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        nVictorias.textContent = parseInt(nVictorias.textContent) + 1;
        humanScore += 1
    }

    else if (humanChoice === "paper" && computerChoice === "scissors"){
        nDerrotas.textContent = parseInt(nDerrotas.textContent) + 1;
        computerScore += 1
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        nVictorias.textContent = parseInt(nVictorias.textContent) + 1;
        humanScore += 1
    }

    else if (humanChoice === "rock" && computerChoice === "paper"){
        nDerrotas.textContent = parseInt(nDerrotas.textContent) + 1;
        computerScore += 1
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        nVictorias.textContent = parseInt(nVictorias.textContent) + 1;
        humanScore += 1
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

