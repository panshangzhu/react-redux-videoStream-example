import selectSong from "../actions"
import {combineReducers} from "redux"
import {SONG_FETCH, SONG_SELECTED} from "../helper";
import userReducer from "./userReducer";
import oauthReducer from "./oauthReducer";
import {reducer as formReducer} from "redux-form"
import streamReducer from "./streamReducer";

const initState = {
    fetchedSongs: [],
    putSingleSong: null
}

const songsReducer = () => {
    return [
        {title: 'Ride it', duration: '2:37'},
        {title: 'Higher love', duration: '3:48'},
        {title: 'Here with me', duration: '4:22'},
        {title: 'Heaven', duration: '3:37'},
    ]
}

const selectedSongReducer = (selectSong = null, action) => {
    if (action.type === SONG_SELECTED) {
        return action.payload
    }
    return selectSong
}

const fetchSongReducer = (fetchSong = [], action) => {
    if (action.type === SONG_FETCH) {
        return [...fetchSong, ...action.payload.data]
    }
    return fetchSong
}

export default combineReducers(
    {
        songsReducer,
        selectedSongReducer,
        fetchSongReducer,
        userReducer,
        oauthReducer,
        streamReducer,
        form: formReducer
    }
)