/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PostPage from './pages/PostPage';
import PostPageDetail from './pages/PostPageDetail';
function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/">
            <PostPage />
          </Route>
        <Route path="/posting/:postingId">
            <PostPageDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
