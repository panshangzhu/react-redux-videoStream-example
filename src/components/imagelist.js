import React, {Component} from "react";
import REactDOM from 'react-dom';
import './imagelist.css';

class Imagelist extends Component{
    render() {
        let temp = this.props.images.map(obj => {
            return <img
                className="single"
                key={obj.id}
                        src={obj.urls.regular+"&w=500&h=300&dip=2"}
                onClick={event => this.props.updateImageClick(event.target)}
                onMouseOver={ event => this.props.updateImageback(event.target)}
                onMouseOut={ event => this.props.onmouseoverImg('')}
            ></img>
        })
        return(
            <div className="imagelist">{temp}</div>
        )
    }
}
export default Imagelist