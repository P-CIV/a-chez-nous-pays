document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // selc des elements 
  const btnMenu = document.getElementById('btnmenu');
  const menu = document.getElementById('menu');
  const menuItems = document.querySelectorAll('.menu__item');
  const nav = document.querySelector('.main_nav');

  // js mobile
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
    btnMenu.classList.toggle('active');
  });

  menuItems.forEach((item, index) => {
    item.style.animation = `fadeInMenu 0.5s ease forwards ${index * 0.1}s`;
  });


  document.addEventListener('click', (e) => {
    const clickInsideMenu = menu.contains(e.target) || btnMenu.contains(e.target);
    if (!clickInsideMenu && menu.classList.contains('show')) {
      menu.classList.remove('show');
      btnMenu.classList.remove('active');
    }
  });

  // scroll de la navigation
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});
