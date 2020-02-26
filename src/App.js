import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostPageDetail from "./pages/PostPageDetail";
import TimeLinePage from "./pages/TimeLinePage";
import SearchPage from "./pages/SearchPage";
import toTop from "./components/toTop";
import LoginPage from "./pages/LoginPage";
import { Global, css, jsx } from "@emotion/core";
import checkStatus from "./apis/check";
import "./App.css";
import { getPosts } from "./apis/SearchPage";

function App() {
  const [globalState, setGlobalState] = useState([]);
  const [userOfActivePage, setUserOfActivePage] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);

  const check = async () => {
    const { response } = await checkStatus(currentUser, userOfActivePage);
    setUserOfActivePage(response);
    setCurrentUser(response);
  };

  useEffect(() => {
    check();
    getPostss()
  }, []);

  const getPostss = async () => {
    try {

      const posts = await getPosts();
      console.log(posts)
    } catch (e) {
      console.log(e);
    }
  };

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
      alert("logging out");
    }
  };
  return (
    <Router>
      <div className="cssTop">Bongstagram</div>
      <div className="cssTop">
        {loggedIn && (
          <Link to="/" onClick={logout}>
            {/* <button type="button">
              logout
            </button> */}
            <svg
              width="24px"
              type="button"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sign-out-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 524 524  "
              className="svg-inline--fa fa-sign-out-alt fa-w-16 fa-3x"
              // onClick={logout}
            >
              <path
                fill="black"
                d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                className=""
              ></path>
            </svg>
          </Link>
        )}
        <Link to={`/TimeLine/${currentUser}`} onClick={toTop}>
          {loggedIn && (
            <svg
              aria-label="사람 찾기"
              className="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                clipRule="evenodd"
                d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z"
                fillRule="evenodd"
              ></path>
            </svg>
          )}
        </Link>
        <Link to={`/SearchPage`}>
          <button type="button">SearchButton</button>
        </Link>
        <Link
          to={`/${currentUser}`}
          onClick={() => {
            changeToCurrentUser();
            toTop();
          }}
        >
          {loggedIn && (
            <svg
              aria-label="프로필"
              className="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M24 27c-7.1 0-12.9-5.8-12.9-12.9s5.8-13 12.9-13c7.1 0 12.9 5.8 12.9 12.9S31.1 27 24 27zm0-22.9c-5.5 0-9.9 4.5-9.9 9.9s4.4 10 9.9 10 9.9-4.5 9.9-9.9-4.4-10-9.9-10zm20 42.8c-.8 0-1.5-.7-1.5-1.5V42c0-5-4-9-9-9h-19c-5 0-9 4-9 9v3.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V42c0-6.6 5.4-12 12-12h19c6.6 0 12 5.4 12 12v3.4c0 .8-.7 1.5-1.5 1.5z"></path>
            </svg>
          )
          // <button type="button">UserHome</button>
          }
        </Link>
      </div>
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
        <Route exact path={`/TimeLine/${currentUser}`}>
          <TimeLinePage
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
          />
        </Route>
        <Route exact path={`/SearchPage`}>
          <SearchPage
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route exact path={`/:user`}>
          <PostPage
            globalState={globalState}
            setGlobalState={setGlobalState}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
            setLoggedIn={setLoggedIn}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route exact path={`/${userOfActivePage}/posting/:postingId`}>
          <PostPageDetail
            globalState={globalState}
            setGlobalState={setGlobalState}
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

const cssTop1 = css`
  background-color: white;
  margin: -7px -8px 0px -8px;
  padding: 0px 0px 7px 0px;
  border-bottom: solid;
`;

export default App;
