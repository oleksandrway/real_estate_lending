
// header menu

const headerMenuBtn = document.querySelector('.header__menu-btn')
const headerMenuWrapper = document.querySelector('.header__menu-wrapper')
const headerMenu = document.querySelector('.header-menu')

function closeHeaderMenu(e) {
  if ((!e.target.closest('.header-menu') && !e.target.closest('.header__menu-btn'))
    || e.target.closest('.header-menu__link')) {
    headerMenuWrapper.classList.remove('header__menu-wrapper--active')
    document.removeEventListener('click', closeHeaderMenu)
    headerMenu.style.maxHeight = null
  }
}

headerMenuBtn.addEventListener('click', () => {
  headerMenuWrapper.classList.toggle('header__menu-wrapper--active')

  if (headerMenu.style.maxHeight) {
    headerMenu.style.maxHeight = null
    document.removeEventListener('click', closeHeaderMenu)
  }
  else {
    headerMenu.style.maxHeight = `${headerMenu.scrollHeight}px`
    document.addEventListener('click', closeHeaderMenu)
  }
})

// properties menu

const propertiesMenuBtn = document.querySelector('.properties__menu-btn')
const properties = document.querySelector('.properties')
const propertiesList = document.querySelector('.properties__menu-content')

function closePropertiesMenu(e) {
  if (!e.target.closest('.properties__menu-btn')) { // have to check because menu doesn't open without it and  can't check if it's 'propertiesBtn' because there is img inside of it
    properties.classList.remove('properties--active')
    propertiesList.style.maxHeight = null
    document.removeEventListener('click', closePropertiesMenu)
  }
}

propertiesMenuBtn.addEventListener('click', () => {
  properties.classList.toggle('properties--active')

  if (propertiesList.style.maxHeight) {
    propertiesList.style.maxHeight = null
    document.removeEventListener('click', closePropertiesMenu)
  }
  else {
    propertiesList.style.maxHeight = `${propertiesList.scrollHeight}px`
    headerMenu.style.maxHeight = `${headerMenu.scrollHeight + propertiesList.scrollHeight}px`
    document.addEventListener('click', closePropertiesMenu)
  }
})
