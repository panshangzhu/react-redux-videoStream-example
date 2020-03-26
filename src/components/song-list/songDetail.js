import React from "react";
import {connect} from "react-redux"
import "./songDetail.css"
import actSelectSong, {actFetchAllUser} from "../../actions";
var Marquee = require("react-marquee")
// import marquee from "react-marquee"

const SongDetail = ({song, singer}) => {
    console.log('props in SongDetail', song)
    if (!song) {
        return <div className="songDetailDiv1">Please subscribe the music first</div>
    }
    return (
        <div className="songDetailDiv2">
            {/*<Marquee text={`Title: ${song.title}, Duration: ${song.id}`}></Marquee>*/}
            <marquee behavior="scroll" direction="">Title: {song.title}, Singer: {singer?.name}</marquee>
        </div>
    )
}

const mapStateToPros = (state) => {
    return {
        song: state.selectedSongReducer,
        singer: state.userReducer.allUser.find(e => {
            return e.id === state.selectedSongReducer?.id
        })
    }
}

export default connect(mapStateToPros, {actSelectSong, actFetchAllUser})(SongDetail)



