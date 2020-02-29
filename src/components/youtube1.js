import React from "react";
import axios from "axios";

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
            <div>
                {/*{this.state.video}*/}
                {/*{this.props.video}*/}
                <iframe width="400" height="250"
                        src={`${this.listUrl}${this.props.video?.id?.videoId}`}
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        );
    }

}

export default Youtube1