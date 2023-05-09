const initFormValidations = () => {

  const form = document.querySelector('.form');
  const name = form.querySelector('input[type="text"]');
  const nameLabel = document.querySelector('.form__label-name');
  const tel = form.querySelector('input[type="tel"]');
  const telLabel = document.querySelector('.form__label-tel');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let isValid = true;
    if (!name.value) {
      nameLabel.classList.add('is-error');
      isValid = false;
    } else {
      nameLabel.classList.remove('is-error');
    }

    if (!tel.value || tel.value.length < 18) {
      telLabel.classList.add('is-error');
      isValid = false;
    } else {
      telLabel.classList.remove('is-error');
    }

    if (isValid) {
      form.submit();
    }

  });
};

export { initFormValidations };
