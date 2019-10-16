import React, { Component } from 'react';
import { connect } from "react-redux";

class ProgressBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.ref = React.createRef();
    }
    render() {
        return (
            <div className="progress-bar">
                <span className="progress-bar__percent">
                    { `${this.props.percent}%` }
                </span>
                <div
                    className="progress-bar__done"
                    ref={ this.ref }
                    style={{width: this.props.percent + '%'}}
                >
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        percent: state.percent
    };
};

export const ProgressBar = connect(
    mapStateToProps,
    null
)(ProgressBarComponent);