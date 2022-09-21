
import './defaultModal.scss'

function createModal({ preContentClass, closeElementsClasses }) {
  const preContent = document.querySelector(preContentClass)
  let content
  if (!preContent || typeof preContent === 'string') {
    console.warn('you should pass a class of  element in function openModal')
    content = document.createElement('div')
    content.classList.add('error')
    content.innerText = 'not found'
  }
  else {
    content = preContent
    content.removeAttribute('hidden')
  }

  const defaultOverlay = document.createElement('div')
  defaultOverlay.className = 'defaultOverlay defaultOverlay--active'

  function hideModal() {
    defaultOverlay.classList.remove('defaultOverlay--active')
    document.body.classList.remove('no-scroll')
  }

  const defaultModal = document.createElement('div')
  defaultModal.className = 'defaultModal'

  const modalClose = document.createElement('div')

  modalClose.className = 'modal__close'
  const span1 = document.createElement('span')
  const span2 = document.createElement('span')

  modalClose.append(span1)
  modalClose.append(span2)

  defaultOverlay.append(defaultModal)
  defaultModal.append(modalClose)
  defaultModal.append(content)

  modalClose.addEventListener('click', hideModal)

  defaultOverlay.addEventListener('click', (e) => {
    if (e.target === defaultOverlay)
      hideModal()
  })
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape')
      hideModal()
  })

  if (closeElementsClasses.length) {
    closeElementsClasses.forEach((closeElementClass) => {
      const closeElement = defaultOverlay.querySelector(closeElementClass)
      if (closeElement)
        closeElement.addEventListener('click', hideModal)
    })
  }

  return defaultOverlay
}

function openModal({ preContentClass, closeElementsClasses }) {
  const contentInModal = document.querySelector(`.defaultOverlay ${preContentClass}`)
  if (contentInModal) {
    const modal = contentInModal.closest('.defaultOverlay')
    modal.classList.add('defaultOverlay--active')
  }
  else {
    const modal = createModal({ preContentClass, closeElementsClasses })
    document.body.appendChild(modal)
  }

  document.body.classList.add('no-scroll')
}

export { openModal }
