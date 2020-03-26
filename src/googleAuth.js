import React from "react";
import {connect} from "react-redux";
import {signIn, signOut} from "./actions/oauth";

class GoogleAuth extends React.Component{
    // state = {
    //     isSignedIn: null
    // }
    renderSignIn() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn === true) {
            return <div><button className="ui red google button" onClick={event => this.onSignOut()}>Sign out</button></div>
        } else {
            return <div><button className="ui red google button" onClick={event => this.onSignIn()}>Sign in</button></div>
        }
    }
    render() {
        return (
            <div>
                {this.renderSignIn()}
                <div>
                    UID: {this.props.gid}
                </div>
            </div>
        );
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }


    componentDidMount() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '201102622159-oaiui5u6h4u1qd0bemskgv7ahg0e8584.apps.googleusercontent.com'
            })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance()
                    // this.setState({isSignedIn: this.auth.isSignedIn.get()})
                    this.updateAuthStatus(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.updateAuthStatus)
                })
        })
    }

    updateAuthStatus = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
        // this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.oauthReducer.isSignedIn,
        gid: state.oauthReducer.gid
    }
}

const mapActionToProps = {signIn, signOut}

export default connect(mapStateToProps, mapActionToProps)(GoogleAuth)