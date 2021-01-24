import refs from './refs';
import clearCountriesContainer from './clear-countries-container';

export default function clearInput() {
  refs.form.reset(); // refs.input.value = '';
  refs.input.focus();
  clearCountriesContainer();
}
