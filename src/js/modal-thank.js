// Modal thankyou 
const MODAL_ACTIVE_CLASS_NAME = 'active';
const thankModal = document.querySelector('.modal-thank-you');
const form = document.querySelector('.thank-form');
const backdrop = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.contacts-button');
const closeBtns = document.querySelectorAll('.close-btn');
const openSuccessModal = () => {
  thankModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
  backdrop.classList.add(MODAL_ACTIVE_CLASS_NAME);
  console.log('first');
};
const closeSuccessModal = () => {
  thankModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  backdrop.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};
closeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    closeSuccessModal();
  });
});
form.addEventListener('submit', e => {
  e.preventDefault();
  setTimeout(openSuccessModal, 300);
});