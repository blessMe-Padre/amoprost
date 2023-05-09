const initPopup = () => {

  // popup
  const popupOpenBtn = document.querySelectorAll('.popup-open-btn');
  const closeBtn = document.querySelector('.popup__btn');
  const popup = document.querySelector('.popup');
  const popupBody = document.querySelector('.popup__body');
  const page = document.querySelector('.page');
  const wrapper = document.querySelector('.wrapper');
  const lockPaddingValue = window.innerWidth - wrapper.offsetWidth + 'px';

  if (popup) {
    popupOpenBtn.forEach((button) => {
      button.addEventListener('click', () => {
        popup.classList.add('is-active');
        page.classList.add('scroll-lock');
        wrapper.style.paddingRight = lockPaddingValue;
      });
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('is-active');
      page.classList.remove('scroll-lock');
      wrapper.style.paddingRight = null;
    });

    // закрываем окно по esc
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        if (popup.classList.contains('is-active')) {
          evt.preventDefault();
          popup.classList.remove('is-active');
          page.classList.remove('scroll-lock');
          wrapper.style.paddingRight = null;
        }
      }
    });

    // закрываем окно по клику вне попапа
    popup.addEventListener('click', function (evt) {
      if (evt.target === popupBody) {
        popup.classList.remove('is-active');
        page.classList.remove('scroll-lock');
        page.classList.remove('page--lock');
        wrapper.style.paddingRight = null;
      }
    });
  }
};

export { initPopup };
