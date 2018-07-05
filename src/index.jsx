import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./rdx/index";

import App from './App';
import Home from './HomePage';
import Forum from './components/forum/forum.js'

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('react-div')
);
