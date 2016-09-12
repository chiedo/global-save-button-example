import React from 'react';
import ReactDOM from 'react-dom';
import App, { store } from './App';
import { Provider } from 'react-redux';
import './assets/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
