import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { streamEdit, streamFetch } from "../../actions/streams";

// const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms));

class StreamEdit extends Component {
  componentDidMount() {
    this.props.streamFetch(this.props.id);
    console.log(this.props.id);
  }

  renderInput = ({ input, label, type, meta: { touched, error } }) => {
    console.log(input);

    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            {label}
          </span>
        </div>
        <input
          type={type}
          {...input}
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
    );
  };

  FORM_FAIELD = "Login faield";
  submitForm = (formValues) => {
    this.props.streamEdit(this.props.id, formValues);
    this.props.history.push("/");
  };

  render() {
    console.log(this.props.stream);
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <div className="formHead">Edit Stream</div>
        <form className="form-content" onSubmit={handleSubmit(this.submitForm)}>
          {error && <strong>{error}</strong>}
          <Field
            name="title"
            type="text"
            label="Stream Title"
            component={this.renderInput}
          ></Field>
          <Field
            name="description"
            type="text"
            label="Description"
            component={this.renderInput}
          ></Field>
          <Field
            name="img"
            type="text"
            label="Image Address"
            component={this.renderInput}
          ></Field>
          <div className="buttons">
            <button
              className="btn btn-info"
              type="submit"
              disabled={submitting}
            >
              Submit
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={reset}
              disabled={submitting}
            >
              Clear Value
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters of less";
  }

  return errors;
};
const formWrapped = reduxForm({
  form: "streamCreater",
  validate,
})(StreamEdit);

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const history = ownProps.history;
  return {
    id: id,
    stream: state.streamReducer.stream,
    history: history,
    enableReinitialize:true,
    initialValues: state.streamReducer.stream
  };
};

export default connect(mapStateToProps, { streamEdit, streamFetch })(
  formWrapped
);
