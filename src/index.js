import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';
import { store } from './App/Components/Redux/store';

import 'normalize.css';
import './scss/App.scss'

const renderEntireTree = (store) => ReactDOM.render(
    <BrowserRouter>
        <App store={store} dispatch={store.dispatch}/>
    </BrowserRouter>,
    document.getElementById(
        "app"
    )
);

renderEntireTree(store);

store.subscribe(()=>{
    console.log(store.getState())
    renderEntireTree(store)})