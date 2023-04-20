import React from "react";
import ReactDOM from "react-dom"
import App from "./main/app.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux"
import reducers from "./main/reducers.js"

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))