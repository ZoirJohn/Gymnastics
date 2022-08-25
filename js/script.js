'use strict';
// console.clear();

// Nullstyle
const aLinks = document.querySelectorAll('a');
if (aLinks.length >= 0) {
   aLinks.forEach((a) => {
      a.addEventListener('click', refresh);
      function refresh(e) {
         e.preventDefault();
      }
   });
}

// Menu-burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
if (burger && menu) {
   burger.addEventListener('click', menuOpenFunction);
   function menuOpenFunction() {
      burger.classList.toggle('cross_');
      menu.classList.toggle('open_');
      body.classList.toggle('lock_');
   }
}

// Magic header
const header = document.querySelector('.header');
const headerPosition = header.getBoundingClientRect().bottom * 3;
window.addEventListener('scroll', fixHeader);
function fixHeader() {
   if (scrollY <= headerPosition) {
      header.style.transform = `translate(0,-${scrollY}px)`;
      header.classList.remove('fix_');
   } else {
      header.classList.add('fix_');
   }
}

const parallaxItemsXY = document.querySelectorAll('[data-depthY]' && '[data-depthX]');
console.log(parallaxItemsXY);

function parallaxAll(nodelist) {
   nodelist.forEach((list_item) => {
      const parent = list_item.closest('section');
      parent.style.position = 'relative';
      parent.addEventListener('mousemove', (e) => {
         let x = e.x;
         let y = e.y;
         list_item.style.transform = `translate(${x * list_item.dataset.depthx}px,${y * list_item.dataset.depthy}px)`;
         list_item.style.transition = `all ${list_item.dataset.transition ? list_item.dataset.transition : 500}ms ease-out`;
      });
   });
}

parallaxAll(parallaxItemsXY);
