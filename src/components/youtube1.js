import React from "react";
import axios from "axios";
import "./../index.css"

class Youtube1 extends React.Component{

    listUrl = 'https://www.youtube.com/embed/'
    state = {
        name: ''
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="youtube1">
                <p>{this.props.video?.snippet?.title}</p>
                {/*{this.state.video}*/}
                {/*{this.props.video}*/}
                <iframe width="800" height="450"
                        src={`${this.listUrl}${this.props.video?.id?.videoId}`}
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                {/*<p>{this.props.video?.snippet?.description}</p>*/}
            </div>
        );
    }

}

export default Youtube1