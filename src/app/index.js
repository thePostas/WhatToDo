import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './components/wrapper'
import { store } from './store';
import { Provider } from 'react-redux';

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Wrapper/>
    </Provider>,
    app);