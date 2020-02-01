import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./commentDetail";

//const React = require('react')

function getButtonName() {
    return 'Click me to refresh time'
}

const App = () => {
    let buttonText = "Refresh Time"
    let style = {backgroundColor: 'blueviolet', color: 'white'}
    navigator.geolocation.getCurrentPosition(loc => console.log(loc),
        err => console.log(err))
    return (
        // <div>
        //     <label htmlFor="name" className="label">Enter name:</label>
        //     <input id="name" type="text">
        //         <button style="background-color: blueviolet; color:white;">Submit</button>
        // </div>);

        <div className="ui comments" style={{margin: "30px"}}>
            <h3 className="ui dividing header">Comments</h3>
            <CommentDetail author="Mark" timeAgo="Today at 5:42PM"></CommentDetail>
            <CommentDetail author="Alex"></CommentDetail>
            <CommentDetail author="Tiger"></CommentDetail>
            <CommentDetail author="Linda"></CommentDetail>

            <form className="ui reply form">
                <div className="field">
                    <textarea></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                    <i className="icon edit"></i> Add Reply
                </div>
            </form>
        </div>);

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)