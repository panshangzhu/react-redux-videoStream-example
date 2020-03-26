import {FETCH_ALL_USER, FETCH_USER, SONG_FETCH, SONG_SELECTED} from "../helper";
import axios from "axios"
import jsonPlaceHolder from "../api/jsonPlaceHolder";


const actSelectSong = (song) => {
    // return an action
    return {
        type: SONG_SELECTED,  // required, action id/type
        payload: song  // optional
    }
}

// export const actFetchSong = async () => {
//     // actions must return an object with type, optionally payload
//     let songs = await jsonPlaceHolder.get('albums')
//     console.log('fetching songs from server')
//     return {
//         type: SONG_FETCH,
//         payload: songs
//     }
// }

// thunk format
export const actFetchSong = () => {
    // return a function
    return async dispatch => {
        let songs = await jsonPlaceHolder.get('albums')
        console.log('fetching songs from server')
        dispatch({
            type: SONG_FETCH,
            payload: songs
        })
    }
}

export const actFetchUser = (user) => {
    return {
        type: FETCH_USER,
        payload: user
    }
}

export const actFetchAllUser = () => async dispatch => dispatch ({
                type: FETCH_ALL_USER,
                payload: await jsonPlaceHolder.get(`users`)
})




const updateSong = (song) => {
    return {
        type: 'UPDATE_SONG',
        payload: song.title = `${song.title} v2`
    }
}



export default actSelectSong