import refs from './refs';
import countriesTemplate from '../templates/countries.hbs';
import oneCountryTemplate from '../templates/one-country.hbs';
import createErrorNotification from './notifications';

export default function createCountriesContainer(countries) {
  if (countries.length > 1) {
    const markup = countriesTemplate(countries);
    refs.div.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length === 1) {
    const markup = oneCountryTemplate(countries);
    refs.div.insertAdjacentHTML('beforeend', markup);
  }

  if (countries.length > 10) {
    createErrorNotification();
  }
}
