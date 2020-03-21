import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput(formPros) {
    return (
      <div>
        <input
          type="text"
          onChange={formPros.input.onChange}
          value={formPros.input.value}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form action="">
          <Field name="title" component={this.renderInput} />
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "streamCreater"
})(StreamCreate);
