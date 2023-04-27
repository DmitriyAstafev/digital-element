const modal = document.getElementById('myModal');
const popupModal = document.querySelector('.modal-popup');

export const openModal = (e) => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  e.preventDefault();
};

export const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

export const openPopup = () => {
  popupModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

export const closePopup = () => {
  popupModal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

export const closeOnBackgroundClick = (e) => {
  if (e.target === modal) {
    closeModal();
  }
  if (e.target === popupModal) {
    closePopup();
  }
};
