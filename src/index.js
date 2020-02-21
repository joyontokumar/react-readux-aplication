import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import react redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from "./reducers";
// css link
import '../src/assets/bootstrap.min.css';
import '../src/assets/style.css';

const store = createStore(
    reducers,
    compose(
        applyMiddleware(promiseMiddleware, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

