import React from 'react';
import { Controls } from './controls';
import { TasksContainer } from "../containers/tasksContainer";

export const Wrapper = () => {
    return (
        <div className={'wrapper'}>
            <h1 className={'title'}>to do list</h1>
            <Controls/>
            <TasksContainer/>
        </div>
    )
};