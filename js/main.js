const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

//items

const items = document.querySelector('.items');
const categorieButton = document.querySelector('.categories__button');

categorieButton.addEventListener('click', itemsHandler);

function itemsHandler(e) {
  e.preventDefault();
  items.classList.add('active');
  categorieButton.style.display = 'none';
}
