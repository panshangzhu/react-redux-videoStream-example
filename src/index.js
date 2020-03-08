import React from "react";
import ReactDOM from 'react-dom';
import App from "./song-list-app/app";
import reducers from './reducers'
import { Provider } from 'react-redux'
import {createStore} from "redux";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)
