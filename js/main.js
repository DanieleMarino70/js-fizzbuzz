// TRACCIA:

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".

// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.




// ESERCIZIO SENZA BONUS
// for(let i=1; i <= 100; i++){
//     if ((i % 3 == 0) && (i % 5 == 0)){
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 == 0){
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0){
//         console.log("Buzz");
//     }
//     else (console.log(i));
// }


// 1° BONUS
// PRENDO IL MAIN CON L'ID "fizz-buzz-main"
// CI METTO DENTRO IL CONTAINER CON containerEl -> 
//         - creo un elemento di tipo div e poi alla classlist aggiungo "container";
//         - faccio append a mainEl di container per aggiungerlo al main; 
// STESSA COSA CON ROW SOLO CHE FACCIO APPEND CON "containerEl"
const mainEl = document.getElementById("fizz-buzz-main");
const containerEl = document.createElement("div");
const rowEl = document.createElement("div");

containerEl.classList.add("container");
rowEl.classList.add("row");

mainEl.append(containerEl);
containerEl.append(rowEl);


// 2° BONUS CON CHECK
// GENERO UN NUMERO CHE CHIEDO ALL'UTENTE
// CHECKO SE E' UN NUMERO O NO, NEL CASO FOSSE NaN RICARICO LA PAGINA
// NEL CASO SIA UN NUMERO GENERO UN CICLO

const randomNumber = parseInt(prompt("Quanti box vuoi vedere?"));
if(isNaN(randomNumber)){
    alert("Perfavore metti un numero");
    window.location.reload();
}
else {
    for(let i=1; i <= randomNumber; i++){
        //creo delle costanti che creano un elemento div ogni ciclo
        const colEl = document.createElement("div");
        const boxEl = document.createElement("div");


        if ((i % 3 == 0) && (i % 5 == 0)){
            //vado attribuire negli if le classi che dovranno avere
            //e in box metto la frase per ogni if che dovrà contenere
            colEl.classList.add("col-auto");
            boxEl.classList.add("box");
            boxEl.append("FizzBuzz");
            boxEl.style.backgroundColor = "coral";
        }
        else if (i % 3 == 0){
            colEl.classList.add("col-auto");
            boxEl.classList.add("box");
            boxEl.append("Fizz");
            boxEl.style.backgroundColor = "#E5989B";
        }
        else if (i % 5 == 0){
            colEl.classList.add("col-auto");
            boxEl.classList.add("box");
            boxEl.append("Buzz");
            boxEl.style.backgroundColor = "#FFB4A2";
        }
        else {
            colEl.classList.add("col-auto");
            boxEl.classList.add("box");
            boxEl.append(i);
            boxEl.style.backgroundColor = "#B5838D";
        }

        // dopo la scelta dell'if genero la colonna con dentro il box
        rowEl.append(colEl);
        colEl.append(boxEl);

        // re inizio il ciclo se condizione del for è vera
    }
}




