import React from "react";
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
    console.log('props in SongDetail', song)
    if(!song) {
        return <div>Please subscribe the music first</div>
    }

    return (<div>
        <h3>Details for:</h3>
        <p>Title: {song.title}, Duration: {song.duration}</p>
    </div>)
}

const maptStateToPros = (state) => {
    return {song: state.selectedSongReducer}
}

export default connect(maptStateToPros)(SongDetail)

