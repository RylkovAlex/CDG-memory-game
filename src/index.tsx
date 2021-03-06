import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/root-reducer/root-reducer";

import "./index.css";
import App from "./components/app-component/App";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers =
  typeof window === `object` &&
  (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware());

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
