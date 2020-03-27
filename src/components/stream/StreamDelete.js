import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";

const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms));

class StreamDelete extends Component {
  renderInput = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
  };

  FORM_FAILED = "login Failed";
  submitForm = formValues => {
    return deplayPost(2000).then(
      () => {
        if (!["jerry", "curry", "pan"].includes(formValues.username)) {
          throw new SubmissionError({
            username: "User does not exist in system",
            _error: this.FORM_FAILED
          });
        } else if (formValues.password !== "mark2win") {
          throw new SubmissionError({
            password: "wrong password",
            _error: this.FORM_FAILED
          });
        } else {
          console.log(`Login Successfully, ${formValues}`);
        }
      } //dely 2s
    );
  };

  render() {
    console.log(this.props);
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <div>Stream Delete</div>
        <form onSubmit={handleSubmit(this.submitForm)}>
          {error && <strong>{error}</strong>}
          <Field
            name="username"
            type="text"
            label="Username"
            component={this.renderInput}
          ></Field>
          <Field
            name="password"
            type="password"
            label="Password"
            component={this.renderInput}
          ></Field>
          <div>
            <button type="submit" disabled={submitting}>
              Log In
            </button>
            <button disabled={pristine || submitting}>Clear Value</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 under";
  }
  return errors;
};
const formWrapped = reduxForm({
  //reduxForm connect store and component
  form: "streamCreater", // form key cannot change
  validate
})(StreamDelete);

export default connect(null, {})(formWrapped);
