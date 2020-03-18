import React from "react";
import ReactDOM from 'react-dom';
// import App from "./song-list-app/app";
import App from './game-caster/app'
import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from "redux";

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)
