// Variabile che mi consente di capire se deve disegnare
let disegno = false;
// Quanti quadratini per riga
let larghezzaScelta = 100;
// Quante righe
let altezzaScelta = 50;
// Contenitore della griglia
const contenitore = document.getElementById('contenitore-canvas');

// Canvas
const canvas = document.getElementById('canvas');
// Definisco la dimensione del box di un canvas
const larghezzaContenitore = contenitore.offsetWidth;
let boxSize = larghezzaContenitore / larghezzaScelta;
// Imposta la larghezza del canvas al 100% della larghezza del suo contenitore
canvas.width = larghezzaContenitore;
const altezzaContenitore = boxSize * altezzaScelta;
canvas.height = altezzaContenitore;
const contesto = canvas.getContext('2d');

// Utilizziamo un doppio ciclo for per creare i quadretti
for (let row = 0; row < altezzaScelta; row++) {
    for (let col = 0; col < larghezzaScelta; col++) {

        // Calcolo la posizione x e y del quadretto
        const x = col * boxSize;
        const y = row * boxSize;
        
        // Disegno il quadretto
        contesto.fillStyle = 'white';
        contesto.fillRect(x, y, boxSize, boxSize);
    }
}

// Ogni volta che cambia la larghezza o l'altezza, la griglia si aggiorna
function aggiornaCanvas() {
    resetDisegno();
}

// Aggiungo gli event listener al contenitore per sapere quando il mouse viene rilasciato
canvas.addEventListener('mousemove', disegna);
canvas.addEventListener('touchmove', disegna);
canvas.addEventListener('mousedown', inizioDisegno);
canvas.addEventListener('touchstart', inizioDisegno);
canvas.addEventListener('mouseup', fineDisegno);
canvas.addEventListener('touchend', fineDisegno);
canvas.addEventListener('mouseleave', fineDisegno);

// Definisco il periodi del mouse schiacciato
function inizioDisegno(event) {
    event.preventDefault();
  disegno = true;
}
function fineDisegno(event) {
    event.preventDefault();
  disegno = false;
}

// Disegno sui canvas
function disegna(event) {
    event.preventDefault();
    let boxSize = larghezzaContenitore / larghezzaScelta;

    if (disegno) {
        let x;
        let y;
        // Calcolo le coordinate del mouse sulla griglia
        if (event.type == 'mousemove') {
            // Calcolo le coordinate del mouse sulla griglia
            const rect = canvas.getBoundingClientRect();
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        } else if (event.type === 'touchmove') {
            // Calcolo le coordinate del touch sulla griglia
            const rect = canvas.getBoundingClientRect();
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;
        }
    
        // Calcolo la riga e la colonna del quadrato in cui si trova il mouse
        const colonna = Math.floor(x / boxSize);
        const riga = Math.floor(y / boxSize);
  
        // Disegno il quadrato pieno sulla posizione corrente del mouse
        if (coloreSelezionato != null) {
            contesto.fillStyle = coloreSelezionato;
            contesto.fillRect(colonna * boxSize, riga * boxSize, boxSize, boxSize);
        } else {
            // Cancella il quadrato corrente
            contesto.fillStyle = 'white';
            contesto.fillRect(colonna * boxSize, riga * boxSize, boxSize, boxSize);
        }
    }
  }

// Reset tela
function resetDisegno() {
    canvas.innerHTML = "";
    coloreSelezionato = null;

    let boxSize = larghezzaContenitore / larghezzaScelta;
    // Imposta la larghezza del canvas al 100% della larghezza del suo contenitore
    canvas.width = larghezzaContenitore;
    const altezzaContenitore = boxSize * altezzaScelta;
    canvas.height = altezzaContenitore;

    // Cancello tutti i bordi
    contesto.clearRect(0, 0, canvas.width, canvas.height);

    // Rigenero la griglia
    for (let row = 0; row < altezzaScelta; row++) {
        for (let col = 0; col < larghezzaScelta; col++) {

            // Calcolo la posizione x e y del quadretto
            const x = col * boxSize;
            const y = row * boxSize;
            
            // Disegno il quadretto
            if (coloreSelezionato != null) {
                contesto.fillStyle = coloreSelezionato;
                contesto.fillRect(x, y, boxSize, boxSize);
            } else {
                // Cancella il quadrato corrente
                contesto.fillStyle = 'white';
                contesto.fillRect(x, y, boxSize, boxSize);
            }
        }
    }
}

// Scarica il disegno
function scaricaDisegno() {
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;
}

// FUNZIONI
// Definisco la larghezza (quanti quadratini per riga)
function impostaLarghezza() {
    larghezzaScelta = larghezza.value;
}

// Definisco l'altezza (quante righe)
function impostaAltezza() {
    altezzaScelta = altezza.value;
}