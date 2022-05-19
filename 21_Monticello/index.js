import './js/header-circles.js';
import { registration } from './js/registration.js';

const DOM = document;

DOM.getElementById('js-registration-form').addEventListener(
  'submit',
  registration
);
