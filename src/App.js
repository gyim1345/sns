import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostPageDetail from "./pages/PostPageDetail";
import TimeLinePage from "./pages/TimeLinePage";
// import scrollToTopController from "./components/scrollToTopController";
import toTop from "./components/toTop";
import LoginPage from "./pages/LoginPage";

function App() {
  const [globalState, setGlobalState] = useState([]);
  const [userOfActivePage, setUserOfActivePage] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const changeToCurrentUser = () => {
    setUserOfActivePage(currentUser);
  };

  const toggleLogInStatus = () => {
    return loggedIn === false ? setLoggedIn(true) : setLoggedIn(false);
  };

  const logout = () => {
    if (loggedIn === true) {
      setLoggedIn(false);
      setCurrentUser("");
      setUserOfActivePage("");
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
      <Link to={`/${currentUser}/TimeLine`} onClick={toTop}>
        {loggedIn && <button type="button">Home</button>}
      </Link>
      <Link
        to={`/${currentUser}`}
        onClick={() => {
          changeToCurrentUser();
          toTop();
        }}
      >
        {loggedIn && <button type="button">UserHome</button>}
      </Link>
      <Switch>
        <Route exact path="/">
          <LoginPage
            setUserOfActivePage={setUserOfActivePage}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
            toggleLogInStatus={toggleLogInStatus}
            loggedIn={loggedIn}
            currentUser={currentUser}
            setGlobalState={setGlobalState}
          />
        </Route>
        <Route exact path={`/${currentUser}/TimeLine`}>
          <TimeLinePage
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path={`/${userOfActivePage}`}>
          <PostPage
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
        <Route path={`/${userOfActivePage}/posting/:postingId`}>
          <PostPageDetail
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
