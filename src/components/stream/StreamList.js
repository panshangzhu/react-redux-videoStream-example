import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";
import {streamFetchAll} from "../../actions/streams";
import StreamItem from "./StreamItem";
import StreamCarousel from './StreamCarousel';
import {Link} from "react-router-dom";

const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms))

class StreamList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('streaList did mount....')
        this.props.streamFetchAll()
    }

    renderInput = ({input, label, type, meta: {touched, error}}) =>
        (<div>
            <label>{label}</label>
            <div>
                <input type={type} {...input} placeholder={label}/>
                {touched && error && <span>{error}</span>}
            </div>
        </div>)

    FORM_FAIELD = 'Login faield'
    submitForm = (formValues) => {
        return deplayPost(2000).then(() => {
            if (!['jerry', 'curry', 'pan', 'jessie'].includes(formValues.username)) {
                throw new SubmissionError({
                    username: 'User does not exist in system',
                    _error: this.FORM_FAIELD
                })
            } else if (formValues.password !== 'mark2win') {
                throw new SubmissionError({
                    password: 'Wrong password',
                    _error: this.FORM_FAIELD
                })
            } else {
                console.log(`Login successfully, ${formValues}`)
            }
        })
    }

    renderStreamList() {
        return <div>
            {
                this.props.streams.map(st =>
                    <StreamItem key={st.title} stream={st}></StreamItem>)
            }
        </div>
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting} = this.props
        return (
            <div>
            <StreamCarousel />
            <div className="container">
                
                {/* <ul className="list-unstyled"> */}
                    {this.renderStreamList()}
                {/* </ul> */}
                <Link type="button"
                      to="/streams/new"
                      className="btn btn-outline-primary" style={{display: this.props.isSignedIn ? 'block': 'none'}}>Create</Link>

            </div>
            </div>
        )
        // return (<div>
        //     <div>Stream List</div>
        //     {this.renderStreamList()}
        // </div>)
    }

}


const validate = values => {
    const errors = {}
    if (!values.username) {
        debugger
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters of less'
    }

    return errors
}
const formWrapped = reduxForm({
    form: 'streamCreater',
    // validate
})(StreamList)

const mapStateToProps = (state, ownProps) => {
    console.log(state.streamReducer);
    return {
        streams: state.streamReducer.streams,
        isSignedIn: state.oauthReducer.isSignedIn
    }
}

export default connect(mapStateToProps, {streamFetchAll})(formWrapped)

