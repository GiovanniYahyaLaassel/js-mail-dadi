// EX-DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Genero un numero random per il giocatore
const playerScore = Math.floor(Math.random() * 6) +1;
console.log(playerScore)

//Genero un numero random per il computer
const computerScore = Math.floor(Math.random() * 6) +1;
console.log(computerScore);

// Confronto i due numeri 
// Se il numero di playerScore e maggiore di quello di computerScore, playerScore vince.
// Se il numero di computerScore e maggiore di quello di playerScore, computerScore vince.
// Se i numeri sono uguali e un pareggio.

if (playerScore > computerScore) {
    console.log(`Hai vinto! Giocatore: ${playerScore}, Computer ${computerScore}`);
} else if (playerScore < computerScore) {
    console.log(`Hai perso! Giocatore: ${playerScore}, Computer ${computerScore}`);
} else {
    console.log(`E' un pareggio! Giocatore: ${playerScore}, Computer ${computerScore}`);

}

