// Variabile del colore selezionato
let coloreSelezionato = "#000000";
// Elemento header: titolo
const titolo = document.getElementById('titolo');
// Elemento header: tasto reset
const reset = document.getElementById('reset');

// AGGIUNGO COLORI PALETTE IN HTML
for (let i = 0; i < prova.length; i++) {
    const element = prova[i];
    const padre = document.getElementById('colori');
    const cerchio = document.createElement("div");
    cerchio.classList.add('cerchio');
    cerchio.id = 'cerchio';
    cerchio.classList.add('my-1');
    if (element.color == '#ffffff') {
        cerchio.classList.add('border');
    }
    cerchio.style.backgroundColor = element.color;
    // Al click aggiungo il bordino al colore selezionato e cambio il colore dei bottoni
    cerchio.onclick = function() {

        // Tolgo il cerchietto degli elementi precedenti
        const selezionabili = document.querySelectorAll('.attivo');
        selezionabili.forEach(function(cerchio) {
            cerchio.classList.remove('attivo');
            cerchio.style.outline = null;
        });

        // Prelevo il colore selezionato
        coloreSelezionato = element.color;

        // Cambio i colori dei bottoni
        titolo.style.backgroundColor = coloreSelezionato;
        reset.style.backgroundColor = coloreSelezionato;

        // Gestisco il colore del testo dei bottoni
        if (coloreSelezionato == "#ffffff" || coloreSelezionato == null) {
            titolo.style.color = '#000000';
            reset.style.color = '#000000';    
        } else {
            titolo.style.color = '#ffffff';
            reset.style.color = '#ffffff';    
        }

        // Aggiungo la classe 'attivo' all'ultimo elemento selezionato
        cerchio.classList.add('attivo');
        // Gestisco il caso del colore bianco
        if (coloreSelezionato == '#ffffff') {
            cerchio.style.outline = "2px solid lightgrey" ;

        } else {
            cerchio.style.outline = "2px solid " + coloreSelezionato;
        }
    };
    padre.appendChild(cerchio);
}

// Quando si seleziona il simbolo del colore vuoto, il valore diventa nullo
function nessunColore() {
    coloreSelezionato = null;
    titolo.style.backgroundColor = null;
    reset.style.backgroundColor = null;
    console.log(coloreSelezionato);

    // Tolgo il cerchietto degli elementi precedenti
    const selezionabili = document.querySelectorAll('.attivo');
    selezionabili.forEach(function(cerchio) {
        cerchio.classList.remove('attivo');
        cerchio.style.outline = null;
    });

    // Gestisco il colore dei bottoni
    titolo.style.color = '#000000';
    reset.style.color = '#000000'; 
}

