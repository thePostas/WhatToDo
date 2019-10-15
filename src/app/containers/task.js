import React, { Component } from 'react';
import {connect} from "react-redux";
import { CloseButton } from './closeButton';

class TaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <div
                className="task"
                id={ this.props.id }
            >
                <span className="task__text">
                    { this.props.text }
                </span>
                <CloseButton id={ this.state.id }/>
            </div>
        )
    }
}

TaskComponent.defaultProps = {
    text: 'some text here'
};

export const Task = connect(
    null,
    null
)(TaskComponent);