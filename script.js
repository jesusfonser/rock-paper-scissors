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

PASO 1:

Crea función getComputerChoice
    Haz que devuelva uno de estos string de manera aleatoria: rock paper scissors
    Haz console.log al valor devuelto por getComputerChoice

Declara la función getComputerChoice sin parámetros
    Variable numDecision. Inicialízala con un valor aleatorio entre 1 y 3.
    Switch con numDecision
        Caso 1: return "rock"
        Caso 2: return "paper"
        Caso 3: return "scissors"

Muestra en consola el resultado de invocar getComputerChoice
*/

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

console.log(getComputerChoice())