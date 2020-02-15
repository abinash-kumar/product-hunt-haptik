import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductHunt from './ProductHunt';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

ReactDOM.render(
    <Provider  store={store}>
        <ProductHunt />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
