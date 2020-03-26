import {BrowserRouter, Link, Route} from "react-router-dom";
import React from "react";
import GoogleAuth from "../googleAuth";
import SteamCreate from "../components/stream/steamCreate";
import StreamEdit from "../components/stream/StreamEdit";
import SteamList from "../components/stream/steamList";
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
            {/*<SteamCreate></SteamCreate>*/}
            <GoogleAuth></GoogleAuth>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}></Route>
                    <Route path="/pagetwo" exact component={PageTwo}></Route>
                    <Route path="/stream" exact component={SteamList}></Route>
                    <Route path='/stream/edit' component={StreamEdit}></Route>
                    <Route path='/stream/new' component={SteamCreate}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
