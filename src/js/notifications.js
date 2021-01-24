import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import { defaults } from '@pnotify/core';
defaults.minHeight = '20px'; //! на нотификации какой-то скролл, пытаюсь убрать его, но не работает

import { alert, notice, info, success, error } from '@pnotify/core';

export default function createErrorNotification() {
  const ErrorNotification = error({
    text: 'To many matches found. Please enter a more specific query!',
  });
}
