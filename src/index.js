import React from "react";
import ReactDom from "react-dom"
import App from "./gameCaster/app";
import reducers from "./reducers"
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
ReactDom.render(
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
        <App></App>
    </Provider>,
    document.getElementById('root')
)