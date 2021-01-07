// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// creo variabili
var mex = document.getElementById('mex');
var flag = false;

// creo la funzione di controllo
function controllo(parola){
  // splitto la parola in un ARRAY in ordine inverso
  var arr = parola.split('').reverse();
  // riporto l' array a stringa
  var newParola = arr.join('');
  // controllo che le due parole siano uguali
  if(parola === newParola){
    mex.innerHTML = 'La parola inserita è palindroma.';
  }else{
    mex.innerHTML = 'Mi spiace ' + parola + ' non è una parola palindroma.';
  }
}

// chiedo una parola all' utente
var parolaUtente = prompt('Inserisci una parola.');

// splitto la parola in un array
var controlloParola = parolaUtente.split('');

// controllo che la parola sia effettivamente una
for(var i = 0; i < controlloParola.length; i++){
  if(controlloParola[i] === ' '){
    flag = true;
  }
}

// faccio le verifiche e se tutto è andato bene invoco la funzione
if(parolaUtente === '' || !isNaN(parolaUtente)){
  mex.innerHTML = 'Cosa ti sfugge di: inserisci una parola?';
}else if(flag === true){
  mex.innerHTML = 'Cosa ti sfugge di: inserisci UNA parola?';
}else{
  controllo(parolaUtente);
}
