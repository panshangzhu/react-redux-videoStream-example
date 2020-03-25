import selectSong from "../actions";
import { combineReducers } from 'redux'
import {FETCH_SONG, SONG_SELECTED} from "../helper";
import userReducer from './userReducer'
import oauthReducer from "./oauthReducer";
import {reducer as formReducer} from "redux-form";
import streamReducer from "./streamReducer";

const initState = {
    fetchedSongs: [],
    putSingleSong: null
}

const songsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_SONG:
            // return [...state, ...action.payload.data]
            return {...state, fetchedSongs: action.payload.data}
            // return  action.payload.data

        default:
            return state
    }
}

const selectedSongReducer = (state = null, action) => {
    if(action.type === SONG_SELECTED) {
        return action.payload
    }

    return state
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
        fetchSongReducer,
        userReducer,
        oauthReducer,
        streamReducer,
        form: formReducer
    }
)

