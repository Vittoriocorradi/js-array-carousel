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

// AddEventListener per cambiare immagine premendo sulle singole miniature

const thumbNail1 = document.getElementById('thumbnail1');
const thumbNail2 = document.getElementById('thumbnail2');
const thumbNail3 = document.getElementById('thumbnail3');
const thumbNail4 = document.getElementById('thumbnail4');
const thumbNail5 = document.getElementById('thumbnail5');

thumbNail1.addEventListener('click',
function() {
    items[active].classList.remove('show');
    thumbNails[active].classList.add('shadow')
    active = 0;
    items[active].classList.add('show');
    thumbNails[active].classList.remove('shadow')
})

thumbNail2.addEventListener('click',
function() {
    items[active].classList.remove('show');
    thumbNails[active].classList.add('shadow')
    active = 1;
    items[active].classList.add('show');
    thumbNails[active].classList.remove('shadow')
})

thumbNail3.addEventListener('click',
function() {
    items[active].classList.remove('show');
    thumbNails[active].classList.add('shadow')
    active = 2;
    items[active].classList.add('show');
    thumbNails[active].classList.remove('shadow')
})

thumbNail4.addEventListener('click',
function() {
    items[active].classList.remove('show');
    thumbNails[active].classList.add('shadow')
    active = 3;
    items[active].classList.add('show');
    thumbNails[active].classList.remove('shadow')
})

thumbNail5.addEventListener('click',
function() {
    items[active].classList.remove('show');
    thumbNails[active].classList.add('shadow')
    active = 4;
    items[active].classList.add('show');
    thumbNails[active].classList.remove('shadow')
})