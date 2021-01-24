import './styles.css';
import '@pnotify/core/dist/Material.css';

import refs from './js/refs';
import clearInput from './js/clear-input';
import fetchCountries from './js/fetch-countries';
import createCountriesContainer from './js/create-countries-container';
import clearCountriesContainer from './js/clear-countries-container';
import './js/notifications';

import { debounce } from 'lodash';
// import * as debounce from 'lodash/debounce';
// var debounce = require('lodash.debounce'); //! Почему-то при таком варианте не работал _.debounce

refs.form.addEventListener('input', debounce(onFormInput, 500));
refs.clearBtn.addEventListener('click', clearInput);

function onFormInput(event) {
  event.preventDefault();

  const inputValue = event.target.value;

  clearCountriesContainer();

  if (inputValue === '') {
    return;
  }

  fetchCountries(inputValue).then(createCountriesContainer);
}
