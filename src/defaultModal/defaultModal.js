
// function createElement() {

// }

import './defaultModal.scss'

function createModal(preContent) {
  // const precontent = document.querySelector(modalContent);
  let content
  if (!preContent || typeof preContent === 'string') {
    console.warn('you should pass an element in function openModal')
    content = document.createElement('div')
    content.classList.add('error')
    content.innerText = 'not found'
  }
  else {
    content = preContent.cloneNode(true)

    content.removeAttribute('hidden')
  }

  const defaultOverlay = document.createElement('div')
  defaultOverlay.className = 'defaultOverlay defaultOverlay--active'

  function removeModal() {
    defaultOverlay.remove()
    document.body.classList.remove('no-scroll')
  }

  const defaultModal = document.createElement('div')
  defaultModal.className = 'defaultModal defaultModal--active'

  const modalClose = document.createElement('div')

  // modalClose.dataset.closeModal = true;
  // modalClose.setAttribute('data-close-modal', 'true')

  modalClose.className = 'modal__close'
  const span1 = document.createElement('span')
  const span2 = document.createElement('span')

  modalClose.append(span1)
  modalClose.append(span2)

  defaultOverlay.append(defaultModal)
  defaultModal.append(modalClose)
  defaultModal.append(content)

  modalClose.addEventListener('click', removeModal)
  defaultOverlay.addEventListener('click', (e) => {
    // if (e.target === defaultOverlay || e.target.dataset.closeModal) {
    if (e.target === defaultOverlay)
      removeModal(defaultOverlay)
  })
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape')
      removeModal(defaultOverlay)
  })

  return defaultOverlay
}

function openModal(modalClass) {
  // const content = document.querySelector(modalClass).cloneNode(true);
  // const content = document.querySelector(modalClass);

  const defaultModal = createModal(modalClass)

  document.body.appendChild(defaultModal)

  document.body.classList.add('no-scroll')
}

export { openModal }
