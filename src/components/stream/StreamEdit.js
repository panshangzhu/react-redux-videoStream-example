import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";
import {streamEdit, streamFetch} from "../../actions/streams";

const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms))

class StreamEdit extends Component{
    renderInput = ({input, label, type, meta: {touched, error}}) =>
         (<div>
             <label>{label}</label>
             <div>
                 <input type={type} {...input} placeholder={label} />
                 {touched && error && <span>{error}</span>}
             </div>
        </div>)

    //FORM_FAIELD = 'Login faield'
    submitForm = (formValues) => {

        this.props.streamEdit(this.props.sid, formValues)

        /*
        return deplayPost(2000).then(() => {
            if(!['jerry', 'curry', 'pan', 'jessie'].includes(formValues.username))
            {
                throw new SubmissionError({
                    username: 'User does not exist in system',
                    _error: this.FORM_FAIELD
                })
            } else if(formValues.password !== 'mark2win') {
                throw new SubmissionError({
                    password: 'Wrong password',
                    _error: this.FORM_FAIELD
                })
            } else {
                console.log(`Login successfully, ${formValues}`)
            }
        })
        */
    }

    componentDidMount() {
        this.props.streamFetch(this.props.match.params.id)
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting} = this.props
        return (<div>
            <div>Stream Edit</div>
            <form onSubmit={handleSubmit(this.submitForm)}>
                {error && <strong>{error}</strong>}
                <Field name='title'
                       type='text'
                       label='Title'
                       component={this.renderInput}
                >
                </Field>
                <Field name='description'
                       type='text'
                       label='Description'
                       component={this.renderInput}
                >

                </Field>
                <div>
                    <button type='submit' disabled={submitting}>Update</button>
                    <button  disabled={pristine || submitting}>Cancel</button>
                </div>
            </form>
        </div>)
    }

}

const validate = values => {
   const errors = {}
   if(!values.username) {
       errors.username = 'Required'
   } else if(values.username.length > 15) {
       errors.username = 'Must be 15 characters of less'
   }

   return errors
}
const formWrapped = reduxForm({
    form: 'streamCreater',
    validate
})(StreamEdit)

const mapStateToProps = (state, ownProps)=> {

    return {
        sid: ownProps.match.params.id,
        initialValues: state.streamReducer.stream
    }
}
export default connect(mapStateToProps, {streamFetch, streamEdit})(formWrapped)

