import React from "react";
import {connect} from 'react-redux'
import actSelectSong, {actFetchSong, actFetchUser, actFetchAllUser} from '../../actions'
import "./songlist.css"
import UserHeader from "./userHeader";

class Songlist extends React.Component{
    state = {
        count: 0
    }

    componentDidMount() {
        this.props.actFetchSong()
        this.props.actFetchAllUser()
    }

    renderSongList() {
        return (
            <div style={{width: '80%'}}>
                { this.props.songs.map((song, index) => {
                return (
                <div key={song.id} className="containers">
                    <div className="btnShow">
                        <a style={{'display': this.state.count === index ? 'block' : 'none'}}
                                  onClick={()=> this.props.actSelectSong(song)}><i className="far fa-play-circle"></i>
                        </a>
                    </div>

                     <div style={{width: "500px"}} className="titleShow" onMouseOver={event => this.setState({count: index})}>{song.title}</div>
                    <div className="singerName">
                        <UserHeader userId={song.userId}></UserHeader>
                    </div>
                </div>
                )
            })}
            </div>
        )

    }

    render() {
        // console.log('songList--->', this.props)
        return (
            <div>
                {this.renderSongList()}
            </div>
        );
    }
}

// 所有的reducers，
// 所有的actions都被映射成为了component props
// mapStateToProps会被调用一次，当你的reducer里面有新数据的时候

const mapStateToProps = (state) => {
    console.log('state from song list --->', state)
    return {songs: state.fetchSongReducer,
        users: state
    }
}

// ES2015 closure 闭包

export default connect(mapStateToProps, {actSelectSong, actFetchSong, actFetchUser, actFetchAllUser})(Songlist)