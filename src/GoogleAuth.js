import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions/Oauth";

class GoogleAuth extends Component {
//   state = {
//     isSignIn: null
//   };

  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "249508110332-q982sde10h2p20erifcnjo8r9oq6rnj3.apps.googleusercontent.com"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
         
          //this.setState({ isSignIn: this.auth.isSignedIn.get() });
          this.updateAuthStatus(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.updateAuthStatus);
        });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    console.log('sign out');
    this.auth.signOut();
  };

  renderSignIn() {
      console.log(this.props);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
          
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon" />
         
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  updateAuthStatus = isSignedIn => {
    
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  render() {
    return <div>
        {
        this.renderSignIn()
        }</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { isSignedIn: state.AuthReducer.isSignedIn,gid:state.AuthReducer.gid };
};
const mapActionToProps = { signIn, signOut };

export default connect(mapStateToProps, mapActionToProps)(GoogleAuth);
