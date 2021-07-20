// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var cognome = prompt("Inserisci il tuo cognome: ");
var array_cognomi=["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

array_cognomi.push(cognome);
console.log(array_cognomi);

document.getElementById("surnames").innerHTML = array_cognomi.sort();