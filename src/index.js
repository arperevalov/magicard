import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';

import 'normalize.css';
import './scss/App.scss'

const renderEntireTree = () => ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById(
        "app"
    )
);

renderEntireTree();
