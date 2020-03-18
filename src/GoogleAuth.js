import React from "react";

class GoogleAuth  extends React.Component{
    state = {isSignedIn: null}

    renderSignIn() {
        if(this.state.isSignedIn === null) {
            return null
        } else if(this.state.isSignedIn === true) {
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
        </div>)
    }

    componentDidMount() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '897954262970-31j2tfsvf4d4f1nuv3budr7bqhga97gt.apps.googleusercontent.com',
            })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance()
                    this.setState({isSignedIn: this.auth.isSignedIn.get()})
                    this.auth.isSignedIn.listen(() => this.updateAuthStatus())
                })
        })
    }

    updateAuthStatus() {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

}

export default GoogleAuth
