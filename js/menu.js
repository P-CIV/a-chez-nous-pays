document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const btnMenu = document.getElementById('btnmenu');
  const menu = document.getElementById('menu');
  const menuItems = document.querySelectorAll('.menu__item');
  const nav = document.querySelector('.main_nav');
  let lastScrollTop = 0;

  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
    menu.classList.toggle('show');
    btnMenu.classList.toggle('active');
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.remove('mostrar');
      menu.classList.remove('show');
      btnMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    const clickInsideMenu = menu.contains(e.target) || btnMenu.contains(e.target);
    if (!clickInsideMenu && (menu.classList.contains('mostrar') || menu.classList.contains('show'))) {
      menu.classList.remove('mostrar');
      menu.classList.remove('show');
      btnMenu.classList.remove('active');
    }
  });

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      nav.classList.remove('hidden');
      nav.classList.remove('scrolled');
    } else if (currentScroll > lastScrollTop) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
      nav.classList.add('scrolled');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      menu.classList.remove('mostrar');
      menu.classList.remove('show');
      btnMenu.classList.remove('active');
    }
  });
});
