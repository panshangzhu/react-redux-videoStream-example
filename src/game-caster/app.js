import React from "react";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import GoogleAuth from "../GoogleAuth";
import StreamCreate from "../components/stream/StreamCreate";
import StreamList from "../components/stream/StreamList";
import StreamEdit from "../components/stream/StreamEdit";
import StreamDelete from "../components/stream/StreamDelete";

const PageOne = () => {
    return <div>
        Page One
        <Link to='/pagetwo'>Two</Link>
    </div>
}

const PageTwo = () => {

    return <div>
        <Link to='/'>One</Link>
        Page Two
    </div>
}


const App = () => {
    return (
        <div>

            <GoogleAuth></GoogleAuth>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/streams/new" component={StreamCreate}></Route>
                    <Route path="/streams/edit" component={StreamEdit}></Route>
                    <Route path="/streams/delete" component={StreamDelete}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App
