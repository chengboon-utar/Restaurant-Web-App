// main.js

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import configStore from redux
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import allReducers from './reducers';
import { StateProvider } from './reducers/StateProvider';
import reducer from './reducers/reducer';

export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};

export const fetchTotal = () => {
  const total =
    localStorage.getItem("total") !== "undefined"
      ? JSON.parse(localStorage.getItem("total"))
      : localStorage.clear();

  return total;
};


const userInfo = fetchUser();
const cartInfo = fetchCart();
const total = fetchTotal();

export const initialState = {
  user: userInfo,
  cartItems: cartInfo,
  total: [],
  foodItems: null,
};

const store = legacy_createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Provider store={store}>
      <App />
    </Provider>
  </StateProvider >
);
