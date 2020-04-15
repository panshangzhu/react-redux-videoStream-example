import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { streamEdit } from "../../actions/streams";

class EditTitle extends Component {
  state = { showInput: false, Stitle: this.props.stream.title };
  hShowEle = edit => {
    return { display: edit ? "block" : "none" };
  };

  onDoubleClick = () => {
    this.setState({ showInput: !this.state.showInput });
  };

  saveTitle = async () => {
    this.setState({ showInput: false });
    this.props.stream.title = this.state.Stitle;
    this.props.streamEdit(this.props.stream.id, this.props.stream);
  };
  handleKey = e => {
    if (e.key === "Enter") {
      this.setState({ showInput: false });
    }
  };

  render() {
    return (
      <div>
        <h5 className="mt-0 mb-1" onDoubleClick={this.onDoubleClick}>
          <div style={this.hShowEle(this.state.showInput)}>
            <input
              type="text"
              value={this.state.Stitle}
              onChange={evt => this.setState({ Stitle: evt.target.value })}
              onKeyDown={this.handleKey}
            />
            <span className="mr-3">
              <i
                className="fas fa-check icon-button-group"
                onClick={this.saveTitle}
              ></i>
            </span>
            <span>
              <i
                className="fas fa-times icon-button-group "
                onClick={() => {
                  this.setState({
                    showInput: false,
                    Stitle: this.props.stream.title
                  });
                }}
              ></i>
            </span>
          </div>
          <div style={this.hShowEle(!this.state.showInput)}>
            {this.state.Stitle}
          </div>
        </h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streamReducer,
    stream: ownProps.stream
  };
};

export default connect(mapStateToProps, { streamEdit })(EditTitle);
