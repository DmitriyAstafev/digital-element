import './styles/index.scss';

import {
  closeModal, openModal, closePopup, closeOnBackgroundClick,
} from './js/modal';
import submitForm from './js/form';

const openBtn = document.getElementById('btnTalk');
const close = document.querySelector('.modal__close');
const form = document.querySelector('.modal__window');
const popupClose = document.querySelector('.modal-popup__close');

popupClose.addEventListener('click', closePopup);

close.addEventListener('click', closeModal);

openBtn.addEventListener('click', openModal);

window.addEventListener('click', closeOnBackgroundClick);

form.addEventListener('submit', submitForm);
