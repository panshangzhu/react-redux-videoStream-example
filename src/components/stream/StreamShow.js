import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";
import {streamEdit, streamFetch} from "../../actions/streams";

const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms))

class StreamShow extends Component{


    //FORM_FAIELD = 'Login faield'
    submitForm = (formValues) => {

        this.props.streamEdit(this.props.sid, formValues)


    }

    componentDidMount() {
        this.props.streamFetch(this.props.match.params.id)
    }

    render() {
        return <div>Stream Show</div>
    }

}


const mapStateToProps = (state, ownProps)=> {

    return {
        sid: ownProps.match.params.id,
        initialValues: state.streamReducer.stream
    }
}
export default connect(mapStateToProps, {streamFetch, streamEdit})(StreamShow)

