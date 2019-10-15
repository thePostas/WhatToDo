import React, { Component } from 'react';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        return (
            <div className="progress-bar">
                <div className="progress-bar__done">
                    %
                </div>
            </div>
        )
    }
}