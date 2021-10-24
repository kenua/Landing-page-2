'use strict';

const menuContainer = document.querySelector('#menu');
const orangeBox = menuContainer.firstElementChild;
const openMenuBtn = document.querySelector('#open-menu');
const closeMenuBtn = document.querySelector('#close-menu');

openMenuBtn.addEventListener('click', e => {
   menuContainer.classList.remove('menu--hide');
   menuContainer.classList.add('menu--show');
   orangeBox.classList.remove('menu__orange-box--hide');
   orangeBox.classList.add('menu__orange-box--show');
});

closeMenuBtn.addEventListener('click', e => {
   menuContainer.classList.remove('menu--show');
   menuContainer.classList.add('menu--hide');
   orangeBox.classList.remove('menu__orange-box--show');
   orangeBox.classList.add('menu__orange-box--hide');
});