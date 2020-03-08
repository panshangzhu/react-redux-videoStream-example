import React from "react";
import SongList from "../components/song-list/SongList";
import SongDetail from "../components/song-list/SongDetail";

const App = () => {
    return (
        <div>
            <div>
                <SongList></SongList>
            </div>
            <div>
                <SongDetail></SongDetail>
            </div>
        </div>
    )
}


export default App
