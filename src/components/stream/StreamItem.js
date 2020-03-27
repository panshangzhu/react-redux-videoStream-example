import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";


class SteamItem extends Component {
    render() {
        return (
            <li className="media">
                <img src="..." className="mr-3" alt="..."/>
                <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
                // MDV,MVVM,
            </li>
        )
    }
}

export default SteamItem
