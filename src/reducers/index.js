import selectSong from "../actions";
import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'Ride it', duration: '2:37'},
        {title: 'Higher love', duration: '3:48'},
        {title: 'Stay with me', duration: '4:22'},
        {title: 'Heaven', duration: '3:37'},
    ]
}

const selectedSongReducer = (selectSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectSong
}

// export reducers
export default combineReducers(
    {
        songsReducer: songsReducer,
        selectedSongReducer
    }
)

