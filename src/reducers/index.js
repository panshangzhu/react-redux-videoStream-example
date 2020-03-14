import selectSong from "../actions";
import { combineReducers } from 'redux'
import {FETCH_SONG, SONG_SELECTED} from "../helper";

const songsReducer = () => {
    return [
        {title: 'Ride it', duration: '2:37'},
        {title: 'Higher love', duration: '3:48'},
        {title: 'Stay with me', duration: '4:22'},
        {title: 'Heaven', duration: '3:37'},
    ]
}

const selectedSongReducer = (selectSong = null, action) => {
    if(action.type === SONG_SELECTED) {
        return action.payload
    }

    return selectSong
}

const fetchSongReducer = (songs = null, action) => {
    if(action.type === FETCH_SONG) {
        return action.payload.data
    }
    return songs
}

// export reducers
export default combineReducers(
    {
        songsReducer: songsReducer,
        selectedSongReducer,
        fetchSongReducer
    }
)

