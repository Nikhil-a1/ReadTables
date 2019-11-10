
/*
    This file is the starting place where the entire app is initialised.
    The Provider is used to connect the react and redux which is also provided store.
    The store is created where reducer is passed to it.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";

import {reducer} from "./store/reducers/reducer";

const store = createStore(reducer);
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
