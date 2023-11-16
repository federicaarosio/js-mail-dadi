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

const submitEmail = document.querySelector("button");

submitEmail.addEventListener("click", function() {

    let isUserOnList = false;

    const userEmail = document.getElementById("email-input").value;
    const wrapperElement = document.querySelector("div.wrapper");
    const resultOutput = document.createElement("p");
    wrapperElement.appendChild(resultOutput);


    for(i = 0 ; i < emailList.length ; i++) {
        const currentEmail = emailList[i];

        if (userEmail == currentEmail) {
            isUserOnList = true;
        }
    }

    console.log(isUserOnList);

    if (isUserOnList) {
        console.log("Sei nella lista")
        resultOutput.innerHTML = ("Sei nella lista!")
    } else {
        console.log("Non sei nella lista")
        resultOutput.innerHTML = ("Non sei nella lista!")
    }
})
