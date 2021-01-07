/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// variabili dom
var mex = document.getElementById('mex');

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

// chiedo all' utente di scegliere pari o dispari
var sceltaUtente = prompt('Scegli pari o dispari.');

// controllo la scelta utente
if(sceltaUtente === '' || (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari')){
  mex.innerHTML = 'Ehi, cosa stai scrivendo?';
}else{
  // se non ha scritto cavolate chiedo un numero
  var numeroUtente = Number(prompt('Scegli un numero da 1 a 5.'));
  // controllo il numero
  if(isNaN(numeroUtente)){
    mex.innerHTML = 'Ehi, scrivi un numero!';
  }else if((numeroUtente < 1 || numeroUtente > 5)){
    mex.innerHTML = 'Non avevamo detto da 1 a 5?';
  }else{
    // constatato che il numero è corretto procedo alla somma
    var somma = pariODispari(numeroComputer, numeroUtente);
    // decreto vincitore
    if (sceltaUtente === 'pari' && somma === true){
      mex.innerHTML = 'Bravo, hai vinto!';
    } else if (sceltaUtente === 'dispari' && somma === false){
      mex.innerHTML = 'Bravo, hai vinto!';
    } else {
      mex.innerHTML = 'Peccato, hai perso!';
    }
  }
}
