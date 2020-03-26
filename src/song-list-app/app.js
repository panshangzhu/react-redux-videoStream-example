import React from "react";
import Songlist from "../components/song-list/songlist";
import SongDetail from "../components/song-list/songDetail";
import {BrowserRouter, Link, Route} from "react-router-dom";
const PageOne = () => {
    return <div>Page one <Link to='/pagetwo'>Two</Link></div>
}

const PageTwo = () => {
    return <div>Page Two <Link to="/">One</Link></div>
}

// clint_id = '201102622159-oaiui5u6h4u1qd0bemskgv7ahg0e8584.apps.googleusercontent.com'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}></Route>
                    <Route path="/pagetwo" component={PageTwo}></Route>
                </div>
            </BrowserRouter>
            <div>
                <SongDetail></SongDetail>
            </div>
            <div>
                <Songlist></Songlist>
            </div>
        </div>
    )
}

export default App