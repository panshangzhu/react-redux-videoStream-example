import React from "react";
import axios from "axios"



class YoutubeSearchBar extends React.Component{
    state = {
        term: '',
    }

    constructor(props) {
        super(props);
    }

    onProcessSubmit(evt) {
        evt.preventDefault()
        console.log(this.state.term)
        this.props.recvTerm(this.state.term)
    }

    render() {
        return (
            <div>
                {/*<form className="ui form" onSubmit={evt => {*/}
                {/*    evt.preventDefault()*/}
                {/*    console.log(this.state.term)*/}
                {/*}}>*/}
                <form className="ui form" onSubmit={evt => this.onProcessSubmit(evt)}>
                    <div className="filed">
                        <div className="ui icon input loading">
                            <label>Search video</label>
                            <input
                                onChange={
                                    evt => this.setState({term: evt.target.value.trimLeft()})}
                                value={this.state.term}
                                type="text" placeholder="Search..."></input>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default YoutubeSearchBar