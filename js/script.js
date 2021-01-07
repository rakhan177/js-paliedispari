/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


// definizione funzione numero random
function randomNumber(min, max){
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// deifnizione pari o dispari
function pariODispari(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var somma = num1 + num2;
  if (somma % 2 === 0){
    return true;
  }else{
    return false;
  }
}

// genero un numero random
var numeroComputer = randomNumber(1, 5);

// chiedo all'utente di scegliere pari o dispari
var sceltaUtente = prompt('Scegli pari o dispari');

// chiedo all'utente di scegliere un numero da 1 e 5
var numeroUtente = prompt('Scegli un numero da 1 a 5');

// controllo se la somma dei numeri è pari o dispari e salvo in variabile
var sommaNumeri = pariODispari(numeroUtente, numeroComputer);

// decreto vincitore
if(sceltaUtente === 'pari' && sommaNumeri === true){
  console.log('Bravo, hai vinto!');
}else if(sceltaUtente === 'dispari' && sommaNumeri === false){
  console.log('Bravo, hai vinto!');
}else{
  console.log('Mi spaice, hai perso!');
}
