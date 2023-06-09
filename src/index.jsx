import React from "react";
import ReactDOM from "react-dom"
import App from "./main/app.jsx";
import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import multi from "redux-multi"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import reducers from "./main/reducers.js"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))