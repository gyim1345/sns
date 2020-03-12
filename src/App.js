import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Link,
  Route,
  withRouter
} from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostPageDetail from "./pages/PostPageDetail";
import TimeLinePage from "./pages/TimeLinePage";
import SearchPage from "./pages/SearchPage";
import toTop from "./components/toTop";
import LoginPage from "./pages/LoginPage";
import { css } from "@emotion/core";
import { checkStatus } from "./apis/check";
import "./App.css";
import { deleteLoginStatus } from "./apis/login";
import TimeLineSvg from "./svgIcons/TimeLineSvg";
import SearchSvg from "./svgIcons/SearchSvg";
import UserSvg from "./svgIcons/UserSvg";
import LogoutSvg from "./svgIcons/LogoutSvg";
import UserProfileImg from "./svgIcons/UserProfileImg";

function App() {
  const [userOfActivePage, setUserOfActivePage] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);

  const check = async () => {
    const { currentUserAPI } = await checkStatus(currentUser, userOfActivePage);
    setUserOfActivePage(currentUserAPI);
    setCurrentUser(currentUserAPI);
  };

  useEffect(() => {
    check();
  }, []);

  const loggingOut = async () => {
    try {
      await deleteLoginStatus();
    } catch (e) {
      console.log(e);
    }
  };

  const changeToCurrentUser = () => {
    setUserOfActivePage(currentUser);
  };

  const logout = () => {
    if (loggedIn === true) {
      setLoggedIn(false);
      setCurrentUser("");
      setUserOfActivePage("");
      loggingOut();
      alert("logging out");
    }
  };

  return (
    <Router>
      <div css={[borderCss]}>
        <div className="cssTop">
          <span css={[fontSize]}>Bongstagram </span>
          <div css={[displayFlex]}>
            {loggedIn && (
              <div css={[navIcons]}>
                <Link to="/" onClick={logout}>
                  <LogoutSvg />
                </Link>
                <Link to={`/TimeLine/${currentUser}`} onClick={toTop}>
                  <TimeLineSvg />
                </Link>
                <Link to={`/SearchPage`}>
                  <SearchSvg />
                </Link>
                <Link
                  to={`/profile/${currentUser}`}
                  onClick={() => {
                    changeToCurrentUser();
                    toTop();
                  }}
                >
                  <UserSvg />
                </Link>
                <UserProfileImg />
              </div>
            )}
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <LoginPage
            setUserOfActivePage={setUserOfActivePage}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path={`/TimeLine/${currentUser}`}>
          <TimeLinePage
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
          />
        </Route>
        <Route exact path={`/SearchPage`}>
          <SearchPage
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route path={`/profile/:user`}>
          <PostPage
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route exact path={`/${userOfActivePage}/posting/:postingId`}>
          <PostPageDetail
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
          />
        </Route>
      </Switch>
    </Router>
  );
}

const navIcons = css`
  display: flex;
  width: 250px;
  justify-content: space-around;
`;

const displayFlex = css`
  display: flex;
  margin-right: 35px;
  position: relative;
  top: 4px;
`;

const fontSize = css`
  font-size: 30px;
  margin-left: 100px;
`;

const borderCss = css`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
  border-color: lightgray;
`;

const cssTop1 = css`
  background-color: white;
  margin: -7px -8px 0px -8px;
  padding: 15px 0px 11px 0px;
`;

export default App;
