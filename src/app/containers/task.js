import React, { Component } from 'react';
import { CloseButton } from './closeButton';
import { CompleteButton } from './CompleteButton';

export default class TaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <div
                className={
                    this.props.isDone
                        ? "task task_done"
                        : "task"
                }
                id={ this.props.id }
            >
                <span className="task__text">
                    { this.props.text }
                </span>
                <CloseButton id={ this.props.id }/>
                <CompleteButton id={ this.props.id } isDone={ this.props.isDone }/>
            </div>
        )
    }
}

TaskComponent.defaultProps = {
    text: 'some text here'
};