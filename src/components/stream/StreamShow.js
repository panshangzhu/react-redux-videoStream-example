import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { streamEdit, streamFetch } from "../../actions/streams";
import flv from "flv.js";

// const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms));

class StreamShow extends Component {
  constructor(props) {
    super();
    this.videoRes = React.createRef();
  }

  componentDidMount() {
    this.props.streamFetch(this.props.id);
  }
  buildPlayer() {
    if (this.flvPlayer || !this.props.stream) {
      return;
    }
    this.flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8080/live/${this.props.id}.flv`
    });
    this.flvPlayer.attachMediaElement(this.videoRes.current);
    this.flvPlayer.load();
    // this.flvPlayer.play(); 自动播放
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillMount() {
    if (this.flvPlayer) {
      this.flvPlayer.destroy();
      this.flvPlayer = undefined;
    }
  }

  submitForm = formValues => {
    this.props.streamEdit(this.props.id, formValues);
    this.props.history.push("/");
  };

  render() {
    if (!this.props.stream) {
      return (
        <div>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <video
          controls
          ref={this.videoRes}
          poster="https://i.guim.co.uk/img/media/bbfb8e6f325681fb9344400509c23b51f6e82585/0_129_2870_1722/master/2870.jpg?width=620&quality=85&auto=format&fit=max&s=a65d357bae47a06c23655e22f07faf3b"
        ></video>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const history = ownProps.history;
  return {
    id: id,
    stream: state.streamReducer.stream,
    history: history,
    initialValues: state.streamReducer.stream,
    stream: state.streamReducer.stream
  };
};

export default connect(mapStateToProps, { streamEdit, streamFetch })(
  StreamShow
);
