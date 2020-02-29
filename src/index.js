import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./commentDetail";
import CommentDetail2, {iPhone} from "./commentDetail2";
import AppCard from "./appCard";
import SearchBar, {APP_NAME} from "./components/searchBar";
import WeatherComponent from "./components/weatherComponent";
import ImageList from "./components/imageList";
import Youtube1 from "./components/youtube1";
import YoutubeSearchBar from "./components/youtubeSearchBar";
import "./index.css"
import YoutubeList from "./components/youtubeList";

//const React = require('react')

function getButtonName() {
    return 'Click me to refresh time'
}

class App extends React.Component {
    buttonText = "Refresh Time"
    style = {backgroundColor: 'blueviolet', color: 'white'}
    state = {term: 'Tokyo', images: [], bcImage: null,
        clickImage: null, test: null}

    recvNewTerm(term) {
        console.log('parent function context ---->>>', term)
        this.setState({term})
    }

    recvImagesFromChild(images) {
        console.log('color: green', images)
        this.setState({images})
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
                        <YoutubeSearchBar></YoutubeSearchBar>
                    </div>
                    <div className="container">
                        <div className="content">
                            <Youtube1></Youtube1>
                        </div>
                        <div>
                            <YoutubeList></YoutubeList>
                        </div>
                    </div>
                </div>);
    }


}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
