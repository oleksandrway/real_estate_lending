const promoForm = document.querySelector('.promo__form')

promoForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(promoForm)
  const data = formData.get('search')

  if (data)
    console.log(data)

  else
    console.log('you forgot to enter a search term')

  promoForm.reset()
})
