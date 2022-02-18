import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';
import { store } from './App/Redux/store';

import 'normalize.css';
import './scss/App.scss'
import { Provider } from 'react-redux';

const renderEntireTree = () => ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App store={store} dispatch={store.dispatch}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById(
        "app"
    )
);

renderEntireTree(store);

store.subscribe(()=>{
    renderEntireTree(store)})