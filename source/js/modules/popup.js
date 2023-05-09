const initPopup = () => {

  // popup
  const popupOpenBtn = document.querySelectorAll('.popup-open-btn');
  const closeBtn = document.querySelector('.popup__btn');
  const popup = document.querySelector('.popup');
  const popupBody = document.querySelector('.popup__body');
  const page = document.querySelector('.page');
  const wrapper = document.querySelector('.wrapper');
  const header = document.querySelector('.header');

  const lockPaddingValue = window.innerWidth - wrapper.offsetWidth + 'px';

  if (popup) {
    const openModalWindow = () => {
      popup.classList.add('is-active');
      page.classList.add('scroll-lock');
      header.style.paddingRight = lockPaddingValue;
      wrapper.style.paddingRight = lockPaddingValue;
    };

    const closeModalWindow = () => {
      popup.classList.remove('is-active');
      page.classList.remove('scroll-lock');
      header.style.paddingRight = null;
      wrapper.style.paddingRight = null;
    };

    popupOpenBtn.forEach((button) => {
      button.addEventListener('click', () => {
        openModalWindow();
      });
    });

    closeBtn.addEventListener('click', () => {
      closeModalWindow();
    });

    // закрываем окно по esc
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        if (popup.classList.contains('is-active')) {
          evt.preventDefault();
          closeModalWindow();
        }
      }
    });

    // закрываем окно по клику вне попапа
    popup.addEventListener('click', function (evt) {
      if (evt.target === popupBody) {
        closeModalWindow();
      }
    });
  }
};

export { initPopup };
