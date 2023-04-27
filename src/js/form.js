/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { closeModal, openPopup } from './modal';
import validate from './validate';

const formInputs = document.querySelectorAll('.modal__window--input');

const submitForm = async (e) => {
  e.preventDefault();
  const isValid = validate();
  if (isValid) {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        fullName: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const res = await req.json();
    if (res) {
      formInputs.forEach((input) => input.value = '');
      closeModal();
      openPopup();
    }
  }
};

export default submitForm;
