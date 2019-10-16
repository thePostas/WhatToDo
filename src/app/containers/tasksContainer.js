import React, { Component } from 'react';
import { connect } from "react-redux";
import TaskComponent from './task';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.calcPercent = this.props.calcPercent.bind(this);
    }

    render() {
        if (this.props.tasks.length !== 0) {
            const tasks = this.props.tasks.map((task, index) => {
                return <TaskComponent
                    key={ index }
                    id={ task.id }
                    text={ task.text }
                    isDone={ task.isDone }
                />
            });
            this.calcPercent();
            return (
                <div className="tasks-container">
                    <div className="tasks-container__inner">
                        { tasks }
                    </div>
                </div>
            )
        } else {
            this.calcPercent();
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

const mapDispatchToProps = function(dispatch) {
    return {
        calcPercent: function () {
            let doneTasks = 0;
            this.props.tasks.map(task => {
                task.isDone ? doneTasks++ : null;
            });
                dispatch({
                    type: "CALCULATE_PERCENT",
                    payload: {
                        doneTasks: doneTasks
                    }
                })
        }
    };
};

export const TasksContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);