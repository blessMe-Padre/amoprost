import { initAboutSlider } from './modules/about-slider';
import { initAccordion } from './modules/accordions';
import { initCircle } from './modules/circle';
import { initNav } from './modules/nav';
import { initPopup } from './modules/popup';
import { initScroll } from './modules/scroll';
import { initTimer } from './modules/timer';
import { initWhomSlider } from './modules/whom-slider';

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
});
