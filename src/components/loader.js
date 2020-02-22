import React, {Component} from "react";

const Loader = props => {
    return (
        <div className="ui segment weatherBase">
            <div className="ui active dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    )
}

export default Loader
