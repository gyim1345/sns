import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostPageDetail from "./pages/PostPageDetail";
import TimeLinePage from "./pages/TimeLinePage";

function App() {
  const [state, setState] = useState([]);
  const [user, setUser] = useState("gibong");
  return (
    <Router>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to={`/${user}`}>
        <button type="button">UserHome</button>
      </Link>

      <Switch>
        <Route exact path="/">
          <TimeLinePage state={state} setState={setState} user={user} />
        </Route>
        <Route exact path={`/${user}`}>
          <PostPage state={state} setState={setState} user={user} />
        </Route>
        <Route path={`/${user}/posting/:postingId`}>
          <PostPageDetail state={state} setState={setState} user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
