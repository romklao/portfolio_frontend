"use strict"

// TODO: click to open a menu bar for a small screen

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav-menu');
const footer = document.querySelector('.footer-social');
const contact = document.querySelector('#contact');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

contact.addEventListener('click', function(e) {
  footer.scrollIntoView();
  e.stopPropagation();
})







