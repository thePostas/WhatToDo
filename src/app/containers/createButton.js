import React, { Component } from 'react';
import { connect } from "react-redux";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.onClick = this.props.onClick.bind(this);
    }

    render() {
        return (
            <button
                onClick={ this.onClick }
                className="create-button"
            >
                +
            </button>
        )
    }
}

Button.defaultProps = {
  id: 0,
  value: ''
};

const mapStateToProps = function(state) {
    return {
        value: state.input
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: function (event) {
            event.preventDefault();
            if (this.props.value) {
                dispatch({
                    type: "CREATE_TASK"
                })
            }
        }
    };
};

export const CreateButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);