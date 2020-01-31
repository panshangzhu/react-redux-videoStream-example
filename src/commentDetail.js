import React from "react";
import faker from "faker";

const CommentDetail = props => {
    console.log(props)
    return (
        <div className="comment">
            <a className="avatar">
                <img src={faker.image.avatar()}></img>
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">
                    How artistic!
                </div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;