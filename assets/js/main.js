// array images
const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/* Milestone 0: Creazione del markup statico: costruire il container e inserire l'immagine grande in modo da poter stilare lo slider. */

/* Milestone 1: rimuovere i contenuti statici e usare l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. */

// selezionare elemento della dom in cui inserire le immagini - queryselector
const containerElement = document.querySelector(".container");
// console.log(slidesElement); 
// ciclare nell'array per generare immagine, titolo, testo - for each 
// creare 2 funzioni: 1. generazione del markup; 2. inserimento del markup

function generateMarkup(object){
   return   `
        <img class="card-img-top" src="${object.image}" alt="Card image cap">
        <div class="card-body text-center my-3">
            <h5 class="card-title">${object.title}</h5>
            <p class="card-text">${object.text}</p>
        </div>
   `
}
function insertMarkup(domElement, markup){
    domElement.insertAdjacentHTML('beforeend', markup);
}

const carouselImages = images.forEach(image => {
    const imgMarkup = generateMarkup(image);
    insertMarkup(containerElement, imgMarkup);
    
    if(images[0].image){
        const activeImage = document.querySelector('img');
            activeImage.classList.add("active");
        const activeText = document.querySelector(".card-body");
            activeText.classList.add("active");
    }

    console.log(image);
}); 



const arrowDown = document.querySelector(".arrow_down");

let activeImage = 0;
let activeText = 0;

arrowDown.addEventListener('click', function (){
        // Seleziono l'immagine attiva e il testo attivo
        const images = document.querySelectorAll('img');
        const thumbnails = document.querySelectorAll('.card-body');

        // rimuovo la classe "active"

        images[activeImage].classList.remove("active");
        thumbnails[activeText].classList.remove("active");

        // incremento il valore da prendere nell'array
        activeImage++;
        activeText ++;

        // creo la variabile dell' immagine successiva
        const nextImg = images[activeImage];
        const nextThumbnail = thumbnails[activeText];

        // aggiungere la classe active
        // do la classe active all'immagine successiva
        nextImg.classList.add('active');
        nextThumbnail.classList.add('active')
})

const arrowUp = document.querySelector(".arrow_up");

arrowUp.addEventListener('click', function (){
    // Seleziono l'immagine attiva e il testo attivo
    const images = document.querySelectorAll('img');
    const thumbnails = document.querySelectorAll('.card-body');

    // rimuovo la classe "active"

    images[activeImage].classList.remove("active");
    thumbnails[activeText].classList.remove("active");

    // incremento il valore da prendere nell'array
    activeImage--;
    activeText--;

    // creo la variabile dell' immagine successiva
    const nextImg = images[activeImage];
    const nextThumbnail = thumbnails[activeText];

    // aggiungere la classe active
    // do la classe active all'immagine successiva
    nextImg.classList.add('active');
    nextThumbnail.classList.add('active')

})


/* Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra. */