// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//Genero numero random per giocatore: userNumber
//Genero numero random per computer: computerNumber

//SE
    //userNUmber > computerNumber
        //allora user vince
    //computerNumber > userNumber
        //allora computer vince
    //negli altri casi (computerNumber = userNumber)
        //parimerito
       
const userNumber = Math.floor((Math.random() * 6) + 1);
console.log(userNumber);

const computerNumber = Math.floor((Math.random() * 6) + 1);
console.log(computerNumber);

const wrapperElement = document.querySelector("div.wrapper");

const userResult = document.createElement("div")
userResult.innerHTML = (`user result is: ${userNumber}`);

const computerResult = document.createElement("div");
computerResult.innerHTML = (`computer result is: ${computerNumber}`);

const winnerIs = document.createElement("div");

wrapperElement.appendChild(userResult);
wrapperElement.appendChild(computerResult);
wrapperElement.appendChild(winnerIs);


if (userNumber > computerNumber) {
    console.log("user wins!");
    winnerIs.innerHTML = ("user wins!");
} else if (computerNumber > userNumber) {
    console.log("computer wins!");
    winnerIs.innerHTML = ("computer wins!");
} else {
    console.log("tie!");
    winnerIs.innerHTML = ("tie!");
}