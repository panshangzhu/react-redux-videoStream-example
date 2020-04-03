import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";
import {streamEdit, streamFetch} from "../../actions/streams";
import flv from 'flv.js'

const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms))

class StreamShow extends Component{


    constructor(props) {
        super(props);
        this.videoRes = React.createRef()
    }
    //FORM_FAIELD = 'Login faield'

    componentDidMount() {
        this.props.streamFetch(this.props.match.params.id)
        this.buildPlayer()
    }

    buildPlayer() {
        if(this.flvPlayer || !this.props.stream) {
            return
        }
        const {id} = this.props.match.params
        this.flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8080/live/${id}.flv`
        });

        this.flvPlayer.attachMediaElement(this.videoRes.current);
        this.flvPlayer.load();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      this.buildPlayer()
    }

    render() {
        if(!this.props.stream) {
            return <div>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
        
        return <div>
            <video controls
                   ref={this.videoRes}
                   poster="https://images05.military.com/sites/default/files/styles/full/public/2018-05/saving-private-ryan-1800.jpg"></video>

        </div>
    }

}


const mapStateToProps = (state, ownProps)=> {

    return {
        sid: ownProps.match.params.id,
        initialValues: state.streamReducer.stream,
        stream: state.streamReducer.stream
    }
}
export default connect(mapStateToProps, {streamFetch, streamEdit})(StreamShow)

