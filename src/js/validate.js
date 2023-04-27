const formInputs = document.querySelectorAll('.modal__window--input');
const inputEmail = document.querySelector('.input-email');
const form = document.querySelector('.modal__window');

const validateEmail = (email) => {
  const re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
  return re.test(String(email).toLowerCase());
};

const validate = () => {
  const emailVal = inputEmail.value;
  const emptyInputs = Array.from(formInputs).filter(
    (input) => input.value === '',
  );

  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    return false;
  }

  if (!validateEmail(emailVal)) {
    inputEmail.classList.add('error');
    return false;
  }
  inputEmail.classList.remove('error');

  return true;
};

form.addEventListener('change', validate);
export default validate;
