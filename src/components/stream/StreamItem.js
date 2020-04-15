import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import StreamEdit from "./StreamEdit";
import EditTitle from "./EditTitle";
import { streamDelete } from "../../actions/streams";
import { Link } from "react-router-dom";

class StreamItem extends Component {
  state = { showSmallButton: false };
  funMouseEnter = event => {
    this.setState({ showSmallButton: true });
  };

  funMouseLeave = event => {
    this.setState({ showSmallButton: false });
  };

  handleDelete = id => {
    this.props.streamDelete(id);
  };

  render() {
    return (
      <div
        className="listCard mb-3"
        // className="media stream-item border-bottom"
        onMouseEnter={this.funMouseEnter}
        onMouseLeave={this.funMouseLeave}
      >
        <Link to={"/streams/" + this.props.stream.id} className="listCard-link">
          <img src={this.props.stream.img} className="img-thumbnail" alt="..." />
        </Link>

        <div className="listCard-body">
          <Link to={"/streams/" + this.props.stream.id}>
            <i className="fas fa-play-circle"></i>
          </Link>
          <div className="listCard-title">
            <EditTitle stream={this.props.stream} />
          </div>
          <p className="listCard-text">{this.props.stream?.description}</p>
        </div>

        <div
          className="listCard-logo"
          style={{
            visibility: this.state.showSmallButton ? "visible" : "hidden"
          }}
        >
          <Link to={"/streams/edit/" + this.props.stream.id}>
            <i className="icon-button-group far fa-edit"></i>
          </Link>
          <i
            className="icon-button-group far fa-trash-alt"
            onClick={() => this.handleDelete(this.props.stream.id)}
          ></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: ownProps.stream,
    history: ownProps.history
  };
};

export default connect(mapStateToProps, { streamDelete })(StreamItem);
