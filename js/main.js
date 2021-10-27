/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

//referenze principali

/* prendo come riferimento il contenitore dell'immagine grossa a sinistra */
const imageContainer = document.querySelector('.images');
/* prendo come riferimento il contenitore delle immagini piccole a destra*/
const thumbsContainer = document.querySelector('.thumbs');



// creazione contenuto principale

// 1. collezioni immagini / testo / titolo

for (let i = 0; i <  imageCollection.length; i++) {
    /// creazione loop con tutte le immagini */
     //  metto interpolazione così facendo scorrerà tutte le immagini, la stessa cosa con i titoli ed il testo
    imageContainer.innerHTML += `
    <div class="image-container">
         <img src="${imageCollection[i]}" alt="${titleCollection[1]}">
         <div class="text">
             <h3>${ titleCollection[i]}</h3>
             <p>${textCollection[i]}</p>
         </div>
    </div>`;

// 2. collezioni Thumbnails
//vale lo stesso procedimento fatto sopra
thumbsContainer.innerHTML += `
<div class="thumb">
<img src="${imageCollection[i]}" alt="${titleCollection[1]}">
</div>`;
}




// rendere l'immagine scelta nel carosello attiva nella parte sinistra

// 1. riferimento per attivare l'immagine
let imgActive = 0; 







