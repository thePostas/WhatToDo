import { createStore } from 'redux';
import { taskReducer } from '../store/reducers';

const initialState = {
    tasks: [],
    input: '',
    index: 0,
    percent: 0
};

export const store = createStore(taskReducer, initialState);