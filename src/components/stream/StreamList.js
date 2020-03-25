import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";
import {streamFetchAll} from "../../actions/streams";

const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms))

class StreamCreate extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
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
            <ul>
                // MDV,MVVM,
                {this.props.streams.map(st => {
                    return <li key={st.id}>{st.id + ', ' +  st.title}</li>
                })}
            </ul>
        </div>
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting} = this.props
        return (<div>
            <div>Stream List</div>
            {this.renderStreamList()}
        </div>)
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
    // form: 'streamCreater',
    // validate
})(StreamCreate)

const mapStateToProps = (state, ownProps) => {
    return {
        streams: state.streamReducer
    }
}

export default connect(mapStateToProps, {streamFetchAll})(formWrapped)

