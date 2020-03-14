import React, {Component} from "react";
import {connect} from 'react-redux'
import actSelectSong, {actFetchAllUser, actFetchSong} from '../../actions'
import UserHeader from "./UserHeader";

class SongList extends Component {
    componentDidMount() {
        this.props.actFetchSong()
        this.props.actFetchAllUser()
    }

    renderSongList() {
        return this.props.songs.map(song => {
            return (<div key={song.title}>
                <UserHeader userId={song.userId}></UserHeader>
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
                <div>songs</div>
                <div>{JSON.stringify(this.props.fetchSongs)}</div>
            </div>

        )
    }
}

// 所有的reducers, 所有的actions
// 都被映射称为了component pros
// mapStateToProps会被调用一次，当你的reducer里面有新数据的时候

const mapStateToProps = (state) => {
    console.log('state from songlist--->')
    return {songs: state.songsReducer.fetchedSongs,
        fetchSongs: state.fetchSongReducer,
    }
}
// ES2015, closure,
export default connect(mapStateToProps, {actSelectSong, actFetchSong, actFetchAllUser})(SongList)
