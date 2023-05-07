const initAccordion = () => {
  // обработка аккордеона верхнего уровня
  const initGeneralAccordion = () => {
    const generalBtn = document.querySelectorAll('.rates-btn');
    const content = document.querySelector('.rates__features');

    generalBtn.forEach((button) => {
      button.addEventListener('click', (evt) => {
        evt.preventDefault();

        button.classList.toggle('is-active');
        content.classList.toggle('is-active');

        if (button.classList.contains('is-active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          button.classList.remove('is-active');
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };

  // работа вложенного аккордеона
  const initNesdedAccordion = () => {
    const accordions = document.querySelectorAll('.rates-card');

    accordions.forEach((accordion) => {
      const button = accordion.querySelector('.rates-card__btn');
      const content = accordion.querySelector('.rates-card__content');

      button.addEventListener('click', (evt) => {
        evt.preventDefault();

        button.classList.toggle('is-active');
        content.classList.toggle('is-active');

        if (button.classList.contains('is-active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });

    });
  };

  initGeneralAccordion();
  initNesdedAccordion();
};

export { initAccordion };
