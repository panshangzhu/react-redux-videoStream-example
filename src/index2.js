import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./commentDetail";
import CommentDetail2, {iPhone} from "./commentDetail2";
import AppCard from "./appCard";
import SearchBar, {APP_NAME} from "./components/weather/searchBar";
import WeatherComponent from "./components/weather/weatherComponent";
import ImageList from "./components/weather/imageList";
import Youtube1 from "./components/youtube/youtube1";
import YoutubeSearchBar from "./components/youtube/youtubeSearchBar";
import "./index.css"
import YoutubeList from "./components/youtube/youtubeList";
import axios from "axios";
import youtube from "./fun";

//const React = require('react')

function getButtonName() {
    return 'Click me to refresh time'
}
const API = "AIzaSyCJ7fIIhU9NwRhcq8g_yqIbtAcqcY_uoEE"
const Url = "https://www.googleapis.com/youtube/v3/search"
class App extends React.Component {
    buttonText = "Refresh Time"
    style = {backgroundColor: 'blueviolet', color: 'white'}
    // state = {term: 'Tokyo', images: [], bcImage: null,
    //     clickImage: null, test: null}

    state = {
        term: 'macbook',
        video: [],
        count: 0
    }
    getVideo = async (search) => {
        if (!search) {
            return 'key word is empty'
        } else {
            search = search.trim()
            let res = await axios.get(Url, {
                params: {
                    'part': 'snippet',
                    'maxResults': 10,
                    'type': 'video',
                    'q': search,
                    'key': API,
                    timeout: 2000
                }
            })
            console.log(res)
            this.setState({video: res.data.items})
            console.log(this.state.video)
        }
    }
    constructor() {
        super();
    }

    componentDidMount() {
        this.getVideo(this.state.term)
        // youtube(this.state.term)
        // console.log(youtube(this.state.term))
    }

    async recvNewTerm(term) {
        console.log('parent function context ---->>>', this.state.term)
        await this.setState({term})
        // setTimeout(() => {
        this.getVideo(this.state.term)
        // }, 200)
    }

    recvImagesFromChild(images) {
        console.log('color: green', images)
        this.setState({images})
    }

    recvVideoFromChild(video) {
        this.setState({count: video})
    }

    print = (str) => {
        console.log(str)
    }


    render() {
        return (
            // <div>
            //     <label htmlFor="name" className="label">Enter name:</label>
            //     <input id="name" type="text">
            //         <button style="background-color: blueviolet; color:white;">Submit</button>
            // </div>);
            // <div className="ui comments" style={{margin: "30px"}}>
            //     <SearchBar recvTerm={term => this.recvNewTerm(term)}></SearchBar>
            //     <WeatherComponent newCity={this.state.term}
            //                       baImage={this.state.bcImage}
            //                       receiveImages={img => this.recvImagesFromChild(img)}
            //     ></WeatherComponent>
            //     <ImageList updateImageClick={img => this.setState({bcImage: img.src, clickImage: img.src})}
            //                updateImageMouseOver={img => this.setState({bcImage: img.src})}
            //                updateImageMouseOut={img => this.setState({bcImage: this.state.clickImage})}
            //                images={this.state.images}
            //     >This is images</ImageList>
            //     <AppCard color='red'></AppCard>
            //     <h3 className="ui dividing header">Comments</h3>
            //     <CommentDetail2 userName="Mark" age="30"></CommentDetail2>
            //     <CommentDetail2 userName="Jerry" age="30"></CommentDetail2>
            //     <form className="ui reply form">
            //         <div className="field">
            //             <textarea></textarea>
            //         </div>
            //         <div className="ui blue labeled submit icon button">
            //             <i className="icon edit"></i> Add Reply
            //         </div>
            //     </form>
            //     <input type="text" onChange={event => this.setState({test: event.target.value})}></input>
            //     <button onClick={event => this.print(this.state.test)}>Button</button>
                <div>
                    <div className="searchBar">
                        <YoutubeSearchBar recvTerm={term => this.recvNewTerm(term)}></YoutubeSearchBar>
                    </div>
                    <div className="container">
                        <div className="content">
                            <Youtube1 video={this.state.video[this.state.count]}></Youtube1>
                        </div>
                        <div>
                            <YoutubeList videos={this.state.video}
                                         selectCount={num => this.recvVideoFromChild(num)}
                            ></YoutubeList>
                        </div>
                    </div>
                </div>);
    }


}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
