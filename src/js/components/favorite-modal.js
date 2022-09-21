import { openModal } from '@/defaultModal/defaultModal.js'

const favoriteModalBtn = document.querySelector('#favorite-modal-btn')

favoriteModalBtn.addEventListener('click', () => {
  openModal({ preContentClass: '.favorite-modal', closingParameters: { } })
})
