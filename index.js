"use strict"

// TODO: click to open a menu bar for a small screen

var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('.nav-menu');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});


