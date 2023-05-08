import { initAboutSlider } from './modules/about-slider';
import { initAccordion } from './modules/accordions';
import { initNav } from './modules/nav';
import { initTimer } from './modules/timer';
import { initWhomSlider } from './modules/whom-slider';

window.addEventListener('DOMContentLoaded', () => {

  // Modules
  initNav();
  initWhomSlider();
  initAccordion();
  initAboutSlider();
  initTimer();
});
