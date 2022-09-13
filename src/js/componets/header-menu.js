
// header menu

const headerMenuBtn = document.querySelector('.header__menu-btn')
const headerMenu = document.querySelector('.header__menu')

function closeHeaderMenu(e) {
  if ((!e.target.closest('.header-menu') && !e.target.closest('.header__menu-btn'))
    || e.target.closest('.header-menu__link')) {
    headerMenu.classList.remove('header__menu--active')
    document.removeEventListener('click', closeHeaderMenu)
  }
}

headerMenuBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('header__menu--active')

  document.removeEventListener('click', closeHeaderMenu)
  document.addEventListener('click', closeHeaderMenu)
})

// properties menu

const propertiesBtn = document.querySelector('.properties-menu__btn')
const properties = document.querySelector('.properties-menu')
const propertiesList = document.querySelector('.properties-menu__list')

function closePropertiesMenu(e) {
  if (!e.target.closest('.properties-menu__btn') // can't check if its propertiesBtn becouse there is img inside of it
  && e.target !== propertiesList) {
    properties.classList.remove('properties-menu--active')
    document.removeEventListener('click', closePropertiesMenu)
  }
}
propertiesBtn.addEventListener('click', () => {
  properties.classList.toggle('properties-menu--active')

  document.removeEventListener('click', closePropertiesMenu)
  document.addEventListener('click', closePropertiesMenu)
})
