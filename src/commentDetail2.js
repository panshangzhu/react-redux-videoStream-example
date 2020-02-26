import React from "react";
import Faker from 'faker';

const CommentDetail2 = (props) => {
    return (
            <div className="comment">
                <a className="avatar">
                    <img src={Faker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a className="author">{props.userName}</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        Age is: {props.age}
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
            </div>
    )
}


const CDC = () => {

}

const iPhone = () => {

}

export default CommentDetail2;
export {
    CDC,
    iPhone
}
