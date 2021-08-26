const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('header');
const hero = document.querySelector('.hero');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
  header.classList.toggle('header--expand');
  hero.classList.toggle('hero--shrink');
});
