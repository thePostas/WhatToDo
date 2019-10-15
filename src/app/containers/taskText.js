import React, { Component } from 'react';

export default class TaskText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        return (
            <div className="task-text">
                <input type={'text'} className="task-text__input"/>
            </div>
        )
    }
}