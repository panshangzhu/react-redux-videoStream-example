import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./commentDetail";
import CommentDetail2, {iPhone} from "./commentDetail2";
import AppCard from "./appCard";
import SearchBar, {APP_NAME} from "./components/searchBar";
import WeatherComponent from "./components/weatherComponent";
import Imagelist from "./components/imagelist";

//const React = require('react')

function getButtonName() {
    return 'Click me to refresh time'
}

class App extends React.Component {
    buttonText = "Refresh Time"
    style = {backgroundColor: 'blueviolet', color: 'white'}

    state = { term: 'tokyo', images: [], bcImg: null, clickImg: null, testvalue: null}

    recvNewTerm(term) {
        console.log('parent function context ---->>>', term)
        this.setState({term})
    }

    recvImagesFromChild(images) {
        console.log('color: green', images)
        this.setState({images})
    }



    render() {
        return (
            // <div>
            //     <label htmlFor="name" className="label">Enter name:</label>
            //     <input id="name" type="text">
            //         <button style="background-color: blueviolet; color:white;">Submit</button>
            // </div>);
            <div className="ui comments" style={{margin: "30px"}}>
                <SearchBar recvTerm={term => this.recvNewTerm(term)}></SearchBar>
                <WeatherComponent
                    newCity={this.state.term}
                    bcImage2 = {this.state.bcImg}
                    recvImages={img => this.recvImagesFromChild(img)}
                ></WeatherComponent>
                <Imagelist
                    updateImageback={ img => this.setState({bcImg: img.src})}
                    updateImageClick={img => this.setState({bcImg: img.src, clickImg: img.src})}
                    onmouseoverImg={img => this.setState({bcImg: this.state.clickImg})}
                    images={this.state.images}>This is images</Imagelist>
                <AppCard color='red'></AppCard>
                <h3 className="ui dividing header">Comments</h3>
                <CommentDetail2 userName="Mark" age="30"></CommentDetail2>
                <CommentDetail2 userName="Jerry" age="30"></CommentDetail2>
                <form className="ui reply form">
                    <div className="field">
                        <textarea></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit"></i> Add Reply
                    </div>
                </form>
                <div>
                    <button onClick={ event => console.log(this.state.testvalue)}>click me</button>
                    <div><input type="text" name="test" id="test" value={this.state.testvalue} onChange={evetn => this.setState({testvalue: evetn.target.value})}></input></div>
                </div>
            </div>);
    }


}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
