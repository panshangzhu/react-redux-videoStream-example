import {SONG_SELECTED, FETCH_SONG} from "../helper";
import axios from 'axios'
import jsonPlaceHolder from "../api/jsonPlaceHolder";

const actSelectSong = (song) => {
    // return an action
    return {
        type: SONG_SELECTED, // required, action id/type
        payload: song
    }
}

// action creator,
/*
export const actFetchSong =  async () => {
    // return an action
    // actions must return an object with type, optionally payload
    let songs =  await jsonPlaceHolder.get('albums')
    console.log('fetching songs from server')
    return {
        // eslint-disable-next-line no-undef
        type: FETCH_SONG, // required, action id/type
        payload: songs
    }
}
*/

// thunk format
export const actFetchSong =   () => {
    // return a function
    return async dispatch => {
        let songs =  await jsonPlaceHolder.get('albums')
        console.log('fetching songs from server')
        dispatch( {
            // eslint-disable-next-line no-undef
            type: FETCH_SONG, // required, action id/type
            payload: songs
        })
    }
}

const actUpdateSong = (song) => {
    return {
        type: 'UPDATE_SONG',
        payload: song.title = `${song.title} v2`
    }
}

export default actSelectSong
