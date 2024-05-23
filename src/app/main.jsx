import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './configs/storeConfig.js';
import { Provider } from 'react-redux';

import './index.scss';
import { Root } from './Root.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
);
