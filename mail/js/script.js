// MAIL
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.


//Creo una lista di email
    //creo un array

//Chiedo all'utente la sua email

//Confronto la lista con l'email inserita
    //SE
        //l'email inserita è nella mia lista
            //allora l'utente può accedere > stampo esito positivo
        //l'email inserita non è nella mia lista
            //allora l'utente non può accedere > stampo esito negativo


let emailList = ["luca@mail.com", "elena@mail.com", "marta@mail.com", "matteo@mail.com"];
console.log(emailList);

const userEmail = prompt("Type your email");

if (emailList.includes(userEmail)) {
    console.log("you're in the list");
} else {
    console.log("you're not subscribed");
}
