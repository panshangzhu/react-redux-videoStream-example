import React from "react";
import Faker from 'faker';

const CommentDetail2 = (props) => {
    return (
            <div class="comment">
                <a class="avatar">
                    <img src={Faker.image.avatar()}></img>
                </a>
                <div class="content">
                    <a class="author">{props.userName}</a>
                    <div class="metadata">
                        <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                        Age is: {props.age}
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
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
