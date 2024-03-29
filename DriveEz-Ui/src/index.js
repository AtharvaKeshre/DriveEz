import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from 'react-redux'
import i18n from './i18n.ts';
import { I18nextProvider } from 'react-i18next';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.ts'
ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();