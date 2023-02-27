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