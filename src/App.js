import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostPageDetail from "./pages/PostPageDetail";
import TimeLinePage from "./pages/TimeLinePage";
// import scrollToTopController from "./components/scrollToTopController";
import toTop from "./components/toTop";

function App() {
  const [state, setState] = useState([]);
  const [user, setUser] = useState("gibong");
  const [globalUser, setGlobalUser] = useState("gibong");

  const changeToGlobalUser = () => {
    setUser(globalUser);
  };

  return (
    <Router>
      <Link to="/" onClick={toTop}>
        <button type="button">Home</button>
      </Link>
      <Link to={`/${globalUser}`} onClick={changeToGlobalUser} onClick={toTop}>
        <button type="button">UserHome</button>
      </Link>

      <Switch>
        <Route exact path="/">
          <TimeLinePage
            state={state}
            setState={setState}
            user={user}
            setUser={setUser}
            globalUser={globalUser}
          />
        </Route>
        <Route exact path={`/${user}`}>
          <PostPage
            state={state}
            setState={setState}
            user={user}
            setUser={setUser}
            globalUser={globalUser}
          />
        </Route>
        <Route path={`/${user}/posting/:postingId`}>
          <PostPageDetail
            state={state}
            setState={setState}
            user={user}
            setUser={setUser}
            globalUser={globalUser}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
