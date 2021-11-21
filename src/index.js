import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react"
import { store } from './redux/store';
ReactDOM.render(
  <Provider store={store}  >
    {/* Provider helps for the redux store to get items gives the access to store to the whole app  */}
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);