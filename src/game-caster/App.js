import React from "react";
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import StreamCreate from "../components/stream/StreamCreate";

const PageOne = () => {
  return <div>Page One
      <Link to="/pagetwo">Two</Link>
  </div>;
};

const PageTwo = () => {
    return <div>Page Two
        <Link to="/">One</Link>
    </div>;
  };

const App = () => {
  return (
    <div>
        <StreamCreate />
        <GoogleAuth />
        <BrowserRouter>
             <div>
                 <Switch>
                 <Route path="/" exact component={PageOne} />
                 <Route path="/pagetwo" component={PageTwo} />
                 </Switch>
             </div>
        </BrowserRouter>
    </div>
  );
};

export default App;
