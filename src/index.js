import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import {Provider} from "react-redux"
import store from './redux/store';
ReactDOM.render(
  <Provider store={store}  >
    {/* Provider helps for the redux store to get items gives the access to store to the whole app  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);