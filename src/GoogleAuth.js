import React from "react";
import {connect} from 'react-redux'
import {signIn, signOut} from "./actions/oauth";

class GoogleAuth extends React.Component {

    renderSignIn() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn === true) {
            return <div>
                <button
                    className='ui red google button'
                    onClick={this.onSignOut}>
                    <i className='google icon'></i>
                    Sign Out
                </button>
            </div>
        } else {
            return <div>
                <button onClick={this.onSignIn}
                        className='ui red google button'
                >
                    <i className='google icon'></i>
                    Sign In
                </button>
            </div>
        }
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    render() {
        return (<div>
            {this.renderSignIn()}
            <div>UID: {this.props.gid}</div>
        </div>)
    }

    componentDidMount() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '897954262970-31j2tfsvf4d4f1nuv3budr7bqhga97gt.apps.googleusercontent.com',
            })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance()
                    this.updateAuthStatus(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.updateAuthStatus)
                })
        })
    }

    updateAuthStatus = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isSignedIn: state.oauthReducer.isSignedIn,
        gid: state.oauthReducer.gid
    }
}

const mapActionToProps = {signIn, signOut}

export default connect(mapStateToProps, mapActionToProps)(GoogleAuth)
