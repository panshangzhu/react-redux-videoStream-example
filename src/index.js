import React from "react";
import ReactDOM from 'react-dom';
// import App from "./song-list-app/app";
import App from './game-caster/App';
import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from "redux";

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

ReactDOM.render(
    <Provider store={createStore(reducers,composeEnhancers(applyMiddleware(thunk)))}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)
