import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { store } from './Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
