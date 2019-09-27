import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { reducer } from "./reducers";

//import createStore from redux, as it is only affecting redux. This creates the "state" to be stored and passed
import { createStore } from "redux";

//Import Provider from react-redux, as it will be affecting both. This passes the store from Redux to my React App
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";

//create redux store
const store = createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  //passing my redux store to App by wrapping it
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
