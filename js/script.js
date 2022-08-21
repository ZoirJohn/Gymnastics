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
window.addEventListener('scroll', fixHeader);
function fixHeader() {
   if (scrollY <= document.documentElement.clientHeight * 2) {
      header.style.transform = `translate(0,-${scrollY}px)`;
      header.classList.remove('fix_');
   } else {
      header.classList.add('fix_');
   }
}
console.log(window);

// const parallaxItemsXY = document.querySelectorAll('[data-depth]');
// const parallaxItemsXorY = document.querySelectorAll('[data-depthX]');

// function parallax(nodelist) {
//    if (nodelist.length >= 0) {
//       nodelist.forEach((item) => {
//          const parent = item.closest('#page');
//          parent.addEventListener('mousemove', parallaxOnMove);
//       });
//    }

//    function parallaxOnMove(e) {
//       const x = e.x;
//       const y = e.y;
//       nodelist.forEach((item) => {
//          if (item.dataset.depthy && item.dataset.depthx && item.dataset.transition) {
//             item.style.transform = `translate(${x * item.dataset.depthx * 0.1}px,${y * item.dataset.depthy * 0.1}px)`;
//             item.style.transition = `all ${item.dataset.transition}ms ease-out`;
//          } else if (item.dataset.depth && item.dataset.transition) {
//             item.style.transform = `translate(${x * item.dataset.depth * 0.1}px,${y * item.dataset.depth * 0.1}px)`;
//             item.style.transition = `all ${item.dataset.transition}ms ease-out`;
//          }
//       });
//    }
// }
// parallax(parallaxItemsXY);
// parallax(parallaxItemsXorY);
