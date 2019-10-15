import React, { Component } from 'react';
import { connect } from "react-redux";
import { Task } from './task';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        if (this.props.tasks.length !== 0) {
            const tasks = this.props.tasks.map((task, index) => {
                return <Task
                    key={ index }
                    id={ task.id }
                    text={ task.text }
                />
            });
            console.log(tasks);
            return (
                <div className="tasks-container">
                    <div className="tasks-container__inner">
                        { tasks }
                    </div>
                </div>
            )
        } else {
            return (
                <div className={'no-tasks'}>
                    <span className="no-tasks__text">
                        No tasks for today!
                    </span>
                </div>
            )
        }
    }
}

const mapStateToProps = function(state) {
    return {
        tasks: state.tasks
    }
};

export const TasksContainer = connect(
    mapStateToProps,
    null
)(Tasks);