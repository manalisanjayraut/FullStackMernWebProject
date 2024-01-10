import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import i18n from './i18n.ts';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Provider store={store}>
    <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>
</Provider>
</React.StrictMode>
);