import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import App from './App';
import hero from './redux/reducers/hero';
import faq from './redux/reducers/faq';

import './index.css';

const reducers = combineReducers({
    hero,
    faq
});


const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)        
    )
);



ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
),
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
