import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";
import StreamEdit from "./StreamEdit";
import EditTitle from "./EditTitle";


class StreamItem extends Component {
    state = {showSmallButton: false}
    funMouseEnter = event => {
        this.setState({showSmallButton: true})
    }

    funMouseLeave = event => {
        this.setState({showSmallButton: false})
    }

    render() {
        return (
            <li className="media stream-item border-bottom" onMouseEnter={this.funMouseEnter}
                onMouseLeave={this.funMouseLeave}>
                <img src="..." className="mr-3" alt="..."/>
                <div className="media-body">
                    <EditTitle title={this.props.stream?.title}></EditTitle>
                    {this.props.stream?.description}
                </div>
                <div className="" style={{visibility: this.state.showSmallButton ? 'visible': 'hidden'}}>
                    <i className="icon-button-group far fa-edit"></i>
                    <i className="icon-button-group far fa-trash-alt"></i>
                </div>
            </li>
        )
    }
}

export default StreamItem
