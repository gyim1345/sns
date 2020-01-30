import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostPageDetail from "./pages/PostPageDetail";
import TimeLinePage from "./pages/TimeLinePage";
// import scrollToTopController from "./components/scrollToTopController";
import toTop from "./components/toTop";
import LoginPage from "./pages/LoginPage";

function App() {
  const [state, setState] = useState([]);
  const [user, setUser] = useState("");
  const [globalUser, setGlobalUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const changeToGlobalUser = () => {
    setUser(globalUser);
  };

  const logStatus = () => {
    loggedIn === false ? setLoggedIn(true) : setLoggedIn(false);
    console.log(loggedIn);
  };

  const logout = () => {
    if (loggedIn === true) {
      setLoggedIn(false);
      setGlobalUser("");
      setUser("");
      alert("logging out")
    }
  };

  return (
    <Router>
      <Link to="/">
        <button type="button" onClick={logout}>
          {loggedIn ? "logout" : "logIn"}
        </button>
      </Link>
      <Link to={`/${globalUser}/TimeLine`} onClick={toTop}>
        <button type="button">Home</button>
      </Link>
      <Link
        to={`/${globalUser}`}
        onClick={() => {
          changeToGlobalUser();
          toTop();
        }}
      >
        <button type="button">UserHome</button>
      </Link>
      <Switch>
        <Route exact path="/">
          <LoginPage
            setUser={setUser}
            setGlobalUser={setGlobalUser}
            setLoggedIn={setLoggedIn}
            logStatus={logStatus}
            loggedIn={loggedIn}
            globalUser={globalUser}
            setState={setState}
          />
        </Route>
        <Route exact path={`/${globalUser}/TimeLine`}>
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
