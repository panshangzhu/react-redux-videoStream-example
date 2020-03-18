import React from "react";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";

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
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}></Route>
                    <Route path="/pagetwo" component={PageTwo}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App
