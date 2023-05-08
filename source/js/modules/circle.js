import { dataText, dataTitle } from '../data';


const initCircle = () => {
  const circle = document.querySelector('.circle__wrapper');
  const title = document.querySelector('.circle__title');
  const text = document.querySelector('.circle__text');
  const timeout = 2000;

  let currentTitleIndex = 0;
  let currentTextIndex = 0;


  circle.addEventListener('click', () => {
    startAnimation();
    setTimeout(stopAnimation, timeout);
    setTimeout(updateText, timeout);
  });

  const updateText = () => {
    currentTitleIndex = (currentTitleIndex + 1) % dataTitle.length;
    currentTextIndex = (currentTextIndex + 1) % dataText.length;
    title.textContent = dataTitle[currentTextIndex];
    text.textContent = dataText[currentTextIndex];
  };

  const startAnimation = () => {
    circle.classList.add('is-active');
  };

  const stopAnimation = () => {
    circle.classList.remove('is-active');
  };

};

export { initCircle };
