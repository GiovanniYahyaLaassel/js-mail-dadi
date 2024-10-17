//EX-MAIL

//Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
//stampa un messaggio appropriato sull’esito del controllo.

//Inizializzo un array con la lista delle email consentite
const userEmails = [
    'm.rossi@mail.com', 
    'l.bianchi@example.com', 
    'g.verdi@mail.com',
    'a.neri@example.com',
    's.martini@mail.com' 
];

//Chiedo al cliente di inserire la sua email

const guestEmail = prompt('Inserisci la tua Email');

//Verifico se l'email dell'utente e nella lista

let emailFound = false;

//Ciclo attraverso l'array per trovare l'email

for (let i = 0; i < userEmails.length; i++ ) {
    
}