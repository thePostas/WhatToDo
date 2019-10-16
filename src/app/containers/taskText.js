import React, { Component } from 'react';
import { connect } from "react-redux";
import { CreateButton } from '../containers/createButton';

class TaskText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.onKeyDown = this.props.onKeyDown.bind(this);
        this.ref = React.createRef();
    }

    render() {
        return (
            <div className="task-text">
                <input
                    onChange={ this.props.onChange }
                    onKeyDown={ this.onKeyDown }
                    type={ 'text' }
                    className="task-text__input"
                    value={ this.props.value }
                />
                <CreateButton/>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
        return {
            value: state.input

    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        onChange: event => {
            dispatch({
                type: "HANDLE_INPUT",
                payload: {
                    inputValue: event.target.value
                }
            });
        },
        onKeyDown: function (event) {
            if (this.props.value) {
                let key = event.which || event.keyCode;
                    if (key === 13) {
                        dispatch({
                            type: "CREATE_TASK"
                        })
                    }
            }
        }
    };
};

export const InputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskText);