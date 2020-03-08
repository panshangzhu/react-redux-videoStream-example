
const actSelectSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED', // required, action id/type
        payload: song
    }
}

const actUpdateSong = (song) => {
    return {
        type: 'UPDATE_SONG',
        payload: song.title = `${song.title} v2`
    }
}

export default actSelectSong
