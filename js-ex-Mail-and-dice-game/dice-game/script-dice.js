// EX-DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Genero un numero random per il giocatore
const playerScore = Math.floor(Math.random() * 6) +1;
console.log(playerScore)

//Genero un numero random per il computer
const computerScore = Math.floor(Math.random() * 6) +1;
console.log(computerScore);

