import React from "react";
import ReactDOM from 'react-dom';

//const React = require('react')

function getButtonName() {
    return 'Click me to refresh time'
}

const App = () => {
    let buttonText = "Refresh Time"
    let style = {backgroundColor: 'blueviolet', color: 'white'}
    return (
        // <div>
        //     <label htmlFor="name" className="label">Enter name:</label>
        //     <input id="name" type="text">
        //         <button style="background-color: blueviolet; color:white;">Submit</button>
        // </div>);

        <div>
            <span>{new Date().toLocaleDateString()}</span>
            <label htmlFor="name" className="label">Enter name:</label>
            <input id="name" type="text" placeholder={buttonText}></input>
            <button style={style}>{getButtonName()}</button>
        </div>);

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)