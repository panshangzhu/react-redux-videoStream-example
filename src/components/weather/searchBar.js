import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const APP_NAME = 'WEATHER PLUGIN'

class SearchBar extends Component {
    state = {term: 'New York'}
    constructor(props) {
        super();
    }

    onProcessSubmit(evt) {
        evt.preventDefault()
        console.log(this.state.term)
        this.props.recvTerm(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                {/*<form className="ui form" onSubmit={evt => {*/}
                {/*    evt.preventDefault()*/}
                {/*    console.log(this.state.term)*/}
                {/*}}>*/}
                <form className="ui form" onSubmit={evt => this.onProcessSubmit(evt)}>
                    <div className="filed">
                        <div className="ui icon input loading">
                            <label>Search City</label>
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
        )
    }
}

export default SearchBar
export {
    APP_NAME,
}
