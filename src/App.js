/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import PostPage from './pages/PostPage';
import PostPageDetail from './pages/PostPageDetail';

function App() {

  const [state, setState] = useState([]);

  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
         <Route exact path="/">
            <PostPage state={state} setState={setState}/>
          </Route>
        <Route path="/posting/:postingId">
            <PostPageDetail state={state} setState={setState}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
