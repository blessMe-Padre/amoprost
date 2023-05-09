import { initAboutSlider } from './modules/about-slider';
import { initAccordion } from './modules/accordions';
import { initCircle } from './modules/circle';
import { initNav } from './modules/nav';
import { initPopup } from './modules/popup';
import { initScroll } from './modules/scroll';
import { initTimer } from './modules/timer';
import { initWhomSlider } from './modules/whom-slider';
import { initPhoneMask } from './modules/phone-mask';
import { initFormValidations } from './modules/form';

window.addEventListener('DOMContentLoaded', () => {

  // Modules
  initNav();
  initWhomSlider();
  initAccordion();
  initAboutSlider();
  initTimer();
  initCircle();
  initScroll();
  initPopup();
  initPhoneMask();
  initFormValidations();
});
