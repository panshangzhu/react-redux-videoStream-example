import React from "react";
import "./youtubeList.css"

class YoutubeList extends React.Component{
    constructor(props) {
        super(props);
    }
    selectVideo = (imgNum) => {
        this.props.selectCount(imgNum)
    }
    render() {
        return (
            <div>
                {this.props.videos.map((value, index) => {
                    return (
                        <div className="youtubeList" key={index}>
                            <p>{value?.snippet?.title}</p>
                            <img className="img"
                                 src={value?.snippet?.thumbnails?.medium?.url}
                                 onClick={event => this.selectVideo(index)}></img>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default YoutubeList