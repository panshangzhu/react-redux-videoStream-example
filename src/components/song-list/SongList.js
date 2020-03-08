import React, { Component } from "react";
import {connect} from 'react-redux'
import actSelectSong from '../../actions'

class SongList extends Component{
    renderSongList() {
        return this.props.songs.map(song => {
            return (<div key={song.title}>
                <button onClick={() => this.props.actSelectSong(song)}>Select</button>
                <p>{song.title}</p>
            </div>)
        })
    }

    render() {
        console.log('songList-->>', this.props)
        return (
            <div>
                {this.renderSongList()}
            </div>
        )
    }
}

// 所有的reducers, 所有的actions
// 都被映射称为了component pros
// mapStateToProps会被调用一次，当你的reducer里面有新数据的时候

const mapStateToProps = (state) => {
    console.log('state from songlist--->')
    return {songs: state.songsReducer}
}
// ES2015, closure,
export default connect(mapStateToProps, {actSelectSong})(SongList)
