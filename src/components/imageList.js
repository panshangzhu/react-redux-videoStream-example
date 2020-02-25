import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './imageList.css'

class ImageList extends Component {

    render() {
        let temp = this.props.images.map(obj => {
            return <img
                className="single"
                onClick={event => this.props.updateImageClick(event.target)}
                onMouseOver={event => this.props.updateImageClick(event.target)}
                onMouseOut={event => this.props.updateImageClick('') }
                key={obj.id} src={obj.urls.regular+"&h=300&w=500&dpi=10"}></img>
        })
        console.log(temp)
        return (
            <div className="imageList">{temp}</div>
        )
    }

}
export default ImageList
