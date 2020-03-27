

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";
import {streamFetchAll} from "../../actions/streams";

class EditTitle extends Component{
    state = {showInput: false}
    hShowEle = (edit) => {return {display : edit ? 'block' : 'none'}}

    onDoubleClick = () => {
        this.setState({showInput: !this.state.showInput})
    }

    render() {
        return <div>
            <h5 className="mt-0 mb-1" onDoubleClick={this.onDoubleClick}>
                <div style={this.hShowEle(this.state.showInput)}>
                    <input type="text" value={this.props.title}/>
                    <span><i className="fas fa-check icon-button-group "></i></span>
                    <span><i className="fas fa-times icon-button-group "></i></span>
                </div>
                <div style={this.hShowEle(!this.state.showInput)}>
                    {this.props.title}
                </div>
            </h5>
        </div>
    }

}

export default EditTitle
