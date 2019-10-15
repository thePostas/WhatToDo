import React from 'react';
import ProgressBar from '../containers/progressBar';
import TaskText from '../containers/taskText';

export const Controls = () => {
    return (
        <div className="controls">
            <ProgressBar/>
            <TaskText/>
        </div>
    )
};