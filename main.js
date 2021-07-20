// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var cognome = prompt("Inserisci il tuo cognome: ");
var array_cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var posizione = 0;

array_cognomi.push(cognome);
console.log("Disordinati: " + array_cognomi);

console.log("Ordine alfabetico: " + array_cognomi.sort());
document.getElementById("surnames").innerHTML = array_cognomi.sort();

posizione = array_cognomi.indexOf(cognome);
console.log("Posizione all'interno dell'array: " + posizione);
console.log("Posizione all'interno delle lista cognomi: " + (posizione + 1));
document.getElementById("position").innerHTML = posizione + 1;