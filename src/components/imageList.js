import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './imageList.css'

class ImageList extends Component {

    render() {
        let temp = this.props.images.map(obj => {
            return <img
                className="single"
                onClick={event => this.props.updateImageClick(event.target)}
                key={obj.id} src={obj.urls.regular}></img>
        })
        return (
            <div className="imageList">{temp}</div>
        )
    }

}
export default ImageList
