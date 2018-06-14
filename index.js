"use strict"

// TODO: click to open a menu bar for a small screen

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav-menu');
const footer = document.querySelector('.footer-social');
const contact = document.querySelector('#contact');
const about = document.querySelector('#about');
const aboutText = document.querySelector('.about-text');
const overlay = document.querySelector('#overlay');
const closeModal = document.querySelector('.close-modal');

menu.addEventListener('click', function(e) {
  e.stopPropagation();
  drawer.classList.toggle('open');
});

main.addEventListener('click', function(e) {
  e.stopPropagation();
  drawer.classList.remove('open');
});

contact.addEventListener('click', function(e) {
  e.stopPropagation();
  footer.scrollIntoView();
});

about.addEventListener('click', function(e) {
  e.stopPropagation();
  aboutText.className = 'show';
  overlay.className = 'profile-overlay';
});

closeModal.addEventListener('click', function(e) {
  e.stopPropagation();
  overlay.className = 'hide';
  aboutText.className = 'hide';
})







