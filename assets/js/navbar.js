const navbar = document.querySelector('.navbar');
const imgElement = document.querySelector('.iconium-light');

navbar.addEventListener('transitionend', () => {
  if (navbar.classList.contains('affix-top')) {
    imgElement.src = './assets/imgs/burger-light.png';
  } else {
    imgElement.src = './assets/imgs/burger-dark.png';
  }
});
