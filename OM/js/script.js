let header__burger = document.querySelectorAll('.header__burger,.header__link');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');

header__burger.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      header_menu.classList.toggle('active');
      back.classList.toggle('lock');
   }
});


let portfolio__burger = document.querySelectorAll('.portfolio__burger,.portfolio__link');
let portfolio__silent_menu = document.querySelector('.portfolio__menu');


portfolio__burger.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      portfolio__silent_menu.classList.toggle('active');
   }
});

/* ПЛАВНЫЙ СКОРЛ */

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchors =>{
   anchors.addEventListener('click', event =>{
      event.preventDefault();

      const blogID = anchors.getAttribute('href').substring(1)
      
      document.getElementById(blogID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
})
