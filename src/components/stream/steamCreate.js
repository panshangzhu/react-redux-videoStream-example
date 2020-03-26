import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {steamCreate} from "../../actions/steams";
const displayPost = ms => new Promise(resolve => setTimeout(resolve, ms))


class SteamCreate extends React.Component{
    renderInput = ({input, label, type, meta: {touched, error}}) =>
        (
            <div>
                <label>{label}</label>
                <div>
                    <input type={type} {...input} placeholder={label}/>
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        )
    FORM_FAIELD = 'LOGIN FAILED'
    submitForm = (fromValue) => {
        this.props.steamCreate(fromValue)
        // return displayPost(2000).then(res => {
        //     if (!['jerry', 'curry', 'pan'].includes(fromValue.username)) {
        //         throw new SubmissionError({
        //             username: 'User does not exist in system',
        //             _error: this.FORM_FAIELD
        //         })
        //     } else if (fromValue.password !== 'mark2win') {
        //         throw new SubmissionError({
        //             password: 'Wrong password',
        //             _error: this.FORM_FAIELD
        //         })
        //     } else {
        //         console.log(`${fromValue}, login successfully`)
        //     }
        // })
    }


    render() {
        // console.log(this.props)
        const {error, handleSubmit, pristine, reset, submitting} = this.props
        return (
            <div>
                <div>
                    Hi streamCreate
                    {/*<link to='/'>To home</link>*/}
                </div>
                <form onSubmit={handleSubmit(this.submitForm)}>
                    {error && <strong>{error}</strong>}
                    <Field name='title'
                           type="text"
                           label="Username"
                           component={this.renderInput}
                    ></Field>
                    <Field name='description'
                           type='password'
                           label='Password'
                           component={this.renderInput}
                    >

                    </Field>
                    <div>
                        <button type='submit' disabled={submitting}>Log in</button>
                        <button disabled={submitting || pristine}>Clear value</button>
                    </div>
                    {/*<Field name="title" component={this.renderInput}/>*/}
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {}
    if(!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters of less'
    }
    return errors
}
const formWrapped = reduxForm({
    form: 'streamCreater',
    validate
})(SteamCreate)

export default connect(null, {steamCreate})(formWrapped)

// export default reduxForm({
//     form: 'steamCreater'
// })(SteamCreate)