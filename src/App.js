import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
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

function App() {
  const [globalState, setGlobalState] = useState([]);
  const [userOfActivePage, setUserOfActivePage] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);

  const check = async () => {
    const { currentUserAPI } = await checkStatus(currentUser, userOfActivePage);
    setUserOfActivePage(currentUserAPI);
    setCurrentUser(currentUserAPI);
  };
  console.log(document.cookie);
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
            {loggedIn && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="-4 -4 24 24"
                width="24"
                id="search"
              >
                <path d="M8.3283 0C3.73857 0 0 3.73857 0 8.3283C0 12.918 3.73857 16.6566 8.3283 16.6566C10.3242 16.6566 12.1571 15.9479 13.5937 14.7714L18.5663 19.7439C18.643 19.8239 18.7349 19.8877 18.8366 19.9316C18.9383 19.9756 19.0478 19.9988 19.1586 20C19.2694 20.0011 19.3793 19.9801 19.4819 19.9382C19.5845 19.8963 19.6777 19.8344 19.756 19.756C19.8344 19.6777 19.8963 19.5845 19.9382 19.4819C19.9801 19.3793 20.0011 19.2694 20 19.1586C19.9988 19.0478 19.9756 18.9383 19.9316 18.8366C19.8877 18.7349 19.8239 18.643 19.7439 18.5663L14.7714 13.5937C15.9479 12.1571 16.6566 10.3242 16.6566 8.3283C16.6566 3.73857 12.918 0 8.3283 0ZM8.3283 1.66566C12.0178 1.66566 14.9909 4.63876 14.9909 8.3283C14.9909 12.0178 12.0178 14.9909 8.3283 14.9909C4.63876 14.9909 1.66566 12.0178 1.66566 8.3283C1.66566 4.63876 4.63876 1.66566 8.3283 1.66566Z"></path>
              </svg>
            )}
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
      </div>
      <Switch>
        <Route exact path="/">
          <LoginPage
            setUserOfActivePage={setUserOfActivePage}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            currentUser={currentUser}
            setGlobalState={setGlobalState}
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
        <Route exact path={`/:user`}>
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

const borderCss = css`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
  border-color: lightgray;
`;

const cssTop1 = css`
  background-color: white;
  margin: -7px -8px 0px -8px;
  padding: 0px 0px 7px 0px;
`;

export default App;
