import React, { Component } from 'react';
import {connect} from "react-redux";
import icon from '../img/close.svg';

class CloseButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.onClick = this.props.onClick.bind(this);
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.addEventListener('click', this.onClick)
    }

    componentWillUnmount() {
        this.ref.current.removeEventListener('click', this.onClick)
    }

    render() {
        return (
            <div
                ref={this.ref}
                className={"task__close-button"}
            >
                <object
                    className={"task__close-button-image"}
                    type="image/svg+xml"
                    data={icon}
                >
                    Your browser does not support SVG
                </object>
            </div>
        )
    }
}

const mapStateToProps = function(state) {

};

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: function () {
            dispatch({
                type: "DELETE_TASK",
                payload: {
                    id: this.state.id
                }
            })
        }
    };
};

export const CloseButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(CloseButtonComponent);