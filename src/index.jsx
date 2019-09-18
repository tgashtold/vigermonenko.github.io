import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './container/store';
import App from './App';

const url = window.sessionStorage.getItem('url');
if (url) {
  window.sessionStorage.removeItem('url');
  history.replaceState(null, null, url);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
