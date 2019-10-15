import React from 'react';
import ProgressBar from '../containers/progressBar';
import { InputContainer } from '../containers/taskText';

export const Controls = () => {
    return (
        <div className="controls">
            <ProgressBar/>
            <InputContainer/>
        </div>
    )
};