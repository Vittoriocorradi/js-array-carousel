'use strict';

// Lista immagini
const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
// Variabili
let active = 0;
const slider = document.querySelector('.slider');
const thumbNail = document.querySelector('.thumbnails');

// Ciclo per immagini dinamiche
for (let i = 0; i < imgs.length; i++) {
    slider.innerHTML += `<div class="item"><img src="img/${imgs[i]}" alt="Immagine ${i + 1}"></div>`;
    thumbNail.innerHTML += `<div class="thumbnail shadow" id="thumbnail${i + 1}"><img src="img/${imgs[i]}" alt="Immagine ${i + 1}"></div>`;
    console.log(thumbNail);
}

// Lista elementi nascosti
const items = document.querySelectorAll('.item');
// Lista elementi oscurati
const thumbNails = document.querySelectorAll('.thumbnail');
// Aggiunta classe a un elemento per renderlo visibile
items[active].classList.add('show');
// Rimossa classe a un elemento per renderlo non oscurato
thumbNails[active].classList.remove('shadow');

// Variabili per eventi
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

// Evento previous
previous.addEventListener('click',
function() {
    if (active > 0) {
        items[active].classList.remove('show');
        thumbNails[active].classList.add('shadow')
        active--;
        items[active].classList.add('show');
        thumbNails[active].classList.remove('shadow')
    } else {
        items[active].classList.remove('show');
        thumbNails[active].classList.add('shadow')
        active = imgs.length - 1;
        items[active].classList.add('show');
        thumbNails[active].classList.remove('shadow')
    }
}
)

// Evento next
next.addEventListener('click',
function() {
    if (active < imgs.length - 1) {
        items[active].classList.remove('show');
        thumbNails[active].classList.add('shadow')
        active++;
        items[active].classList.add('show');
        thumbNails[active].classList.remove('shadow')
    } else {
        items[active].classList.remove('show');
        thumbNails[active].classList.add('shadow')
        active = 0;
        items[active].classList.add('show');
        thumbNails[active].classList.remove('shadow')
    }
}
)


// BONUS 2






// <div class="thumbnail shadow"><img src="img/01.webp" alt=""></div>
