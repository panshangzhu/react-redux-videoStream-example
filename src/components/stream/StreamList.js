import React, { Component } from "react";
import { connect } from "react-redux";
// import { Field, reduxForm, SubmissionError } from "redux-form";
import { streamFetchAll } from "../../actions/streams";

// const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms));

class StreamList extends Component {
  componentDidMount() {
    this.props.streamFetchAll();
  }

  renderStreamList() {
    return (
      <div>
        <ul>
          {this.props.streams.map(st => {
            return <li key={st.id}>{st.title}</li>;
          })}
        </ul>
      </div>
    );
  }

  

  render() {
    return <div>
      {this.renderStreamList()}
    </div>;
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streamReducer
  };
};

export default connect(mapStateToProps, { streamFetchAll })(StreamList);
