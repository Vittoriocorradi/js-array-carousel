'use strict';

// Lista immagini
const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
// Variabili
let active = 0;
const slider = document.querySelector('.slider');

// Ciclo per immagini dinamiche
for (let i = 0; i < imgs.length; i++) {
    slider.innerHTML += `<div class="item"><img src="img/${imgs[i]}" alt="Immagine ${i + 1}"></div>`;
}

// Lista elementi nascosti
const items = document.querySelectorAll('.item');
// Aggiunta classe a un elemento per renderlo visibile
items[active].classList.add('show');

// Variabili per eventi
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

// Evento previous
previous.addEventListener('click',
function() {
    if (active > 0) {
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    } else {
        items[active].classList.remove('show');
        active = items.length - 1;
        items[active].classList.add('show');
    }
}
)

// Evento next
next.addEventListener('click',
function() {
    if (active < items.length - 1) {
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    } else {
        items[active].classList.remove('show');
        active = 0;
        items[active].classList.add('show');
    }
}
)

