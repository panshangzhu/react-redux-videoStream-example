import React from "react";
import ReactDOM from "react-dom"
import './imageList.css'

class ImageList extends React.Component{


    render() {
        let temp = this.props.images.map(obj => {
            return <img className="single"
                        onClick={event => this.props.updateImageClick(event.target)}
                        onMouseOver={event => this.props.updateImageMouseOver(event.target)}
                        onMouseOut={event => this.props.updateImageMouseOut('')}
                        key={obj.id}
                        src={obj.urls.regular+"&w=500&h=300&dpi=2"}></img>
        })
        return (
            <div className="imageList">{temp}</div>
        )
    }
}

export default ImageList