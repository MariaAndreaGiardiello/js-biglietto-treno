// 1. Chiedi numero di chilometri
const chilometri = Number(prompt("Inserire numero di chilometri che si desidera percorrere"))
console.log(chilometri)
// 2. Chiedi età passeggero
const etaPasseggero = Number(prompt("Inserire età passeggero"))
console.log(etaPasseggero)
// 3. Definisci prezzo biglietto secondo i km percorsi (0.21€ al km)
const prezzo = chilometri * 0.21;
console.log(prezzo);
// 4. Inserisci sconto per 20% persone con età < a 18
let prezzoScontato = Number
if (etaPasseggero < 18) {
    prezzoScontato = ((prezzo * 20) / 100)
    console.log(prezzoScontato)
    document.getElementById("ticket-price").innerHTML = `${prezzoScontato.toFixed(2)}`
// 5. Inserisci sconto del 40% per persone con età > a 65 
} else if (etaPasseggero >= 65) {
    prezzoScontato = ((prezzo * 40) / 100)
    console.log(prezzoScontato)
    document.getElementById("ticket-price").innerHTML = `${prezzoScontato.toFixed(2)}`
// 6. visualizza prezzo finale biglietto con cifra decimale non oltre 2 posizioni
} else if (prezzo !== prezzoScontato) {
    document.getElementById("ticket-price").innerHTML = `${prezzo.toFixed(2)}`
}

