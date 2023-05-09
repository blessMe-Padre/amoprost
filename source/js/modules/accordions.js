const initAccordion = () => {
  // обработка аккордеона верхнего уровня
  const initGeneralAccordion = () => {
    const generalBtn = document.querySelector('.rates-btn');
    const secondBtn = document.querySelector('.rates-features-btn');
    const content = document.querySelector('.rates__features');
    const ratesCard = document.querySelector('.rates-card--popular');

    generalBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      generalBtn.classList.toggle('is-active');
      ratesCard.classList.toggle('is-active');
      content.classList.toggle('is-active');

      if (generalBtn.classList.contains('is-active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });

    secondBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      generalBtn.classList.remove('is-active');
      content.classList.remove('is-active');
      ratesCard.classList.remove('is-active');
      content.style.maxHeight = null;
    });
  };

  // работа вложенного аккордеона
  const initNestedAccordion = () => {
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
  initNestedAccordion();
};

export { initAccordion };

