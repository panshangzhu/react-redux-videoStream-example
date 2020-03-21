import React from "react";
import SongList from "../components/song-list/SongList";
import SongDetail from "../components/song-list/SongDetail";
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom';

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
        <BrowserRouter>
             <div>
                 <Switch>
                 <Route path="/" exact component={PageOne} />
                 <Route path="/pagetwo" component={PageTwo} />
                 </Switch>
             </div>
        </BrowserRouter>
      <div>
        <SongList></SongList>
      </div>
      <div>
        <SongDetail></SongDetail>
      </div>
    </div>
  );
};

export default App;
