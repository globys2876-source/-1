const burgerButton = document.querySelector('.burger-button');
const mainNav = document.querySelector('.main-nav');

burgerButton.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
});
