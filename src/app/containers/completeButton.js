import React, { Component } from 'react';
import {connect} from "react-redux";
import icon from '../img/check.svg';

class CompleteButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.onClick = this.props.onClick.bind(this);
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.ref.current.removeEventListener('click', this.onClick);
    }

    render() {
        return (
            <div
                className={
                    this.props.isDone
                        ? "task__complete-button task__complete-button_done"
                        : "task__complete-button"
                }
                ref={ this.ref }
            >
                <object
                    className={"task__complete-button-image"}
                    type="image/svg+xml"
                    data={ icon }
                >
                    Your browser does not support SVG
                </object>
            </div>
        )
    }
}

CompleteButtonComponent.defaultProps = {
    id: 0,
    isDone: false
};

const mapStateToProps = function(state) {

};

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: function () {
            dispatch({
                type: "COMPLETE_TASK",
                payload: {
                    id: this.state.id
                }
            })
        }
    };
};

export const CompleteButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompleteButtonComponent);