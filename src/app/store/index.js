import { createStore } from 'redux';
import { taskReducer } from './reducers';
import { applyMiddleware } from 'redux';
import { logger } from './logger';

const initialState = {
    tasks: [],
    input: "",
    percent: 0
};

export const store = createStore(taskReducer, initialState, applyMiddleware(logger));