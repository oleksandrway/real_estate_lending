import { openModal } from '@/defaultModal/defaultModal.js'

const favoriteModalBtn = document.querySelector('#favorite-modal-btn')
const favoriteModal = document.querySelector('.favorite-modal')

favoriteModalBtn.addEventListener('click', () => {
  openModal({ preContent: favoriteModal, closeElementsClasses: ['.order-call__btn'] })
})
