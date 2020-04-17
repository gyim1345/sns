import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { css } from '@emotion/core';
import { checkStatus } from './apis/check';
import './App.css';
import Fab from '@material-ui/core/Fab';

import PostPage from './pages/PostPage';
import PostPageDetail from './pages/PostPageDetail';
import TimeLinePage from './pages/TimeLinePage';
import SearchPage from './pages/SearchPage';
import toTop from './components/toTop';
import LoginPage from './pages/LoginPage';
import TimeLineSvg from './svgIcons/TimeLineSvg';
import SearchSvg from './svgIcons/SearchSvg';
import UserProfileImg from './svgIcons/UserProfileImg';
import UploadPage from './pages/UploadPage';
import ModalBoxAdd from './components/ModalBoxAdd';
import { getUserImage } from './apis/post';

function App() {
  const [userOfActivePage, setUserOfActivePage] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState('');

  const check = async () => {
    const { sessionUserName } = await checkStatus(
      currentUser,
      userOfActivePage
    );
    setUserOfActivePage(sessionUserName);
    setCurrentUser(sessionUserName);
    const imageURL = await getUserImage(sessionUserName);
    setUserImage(imageURL);
  };

  useEffect(() => {
    check();
  }, []);

  const changeToCurrentUser = () => {
    setUserOfActivePage(currentUser);
  };

  return (
    <Router>
      {loggedIn && (
        <div css={[borderCss]}>
          <div className="cssTop">
            <div css={[topHeaderWidth]}>
              <span css={[fontSize]}>Bongstagram </span>
              <div css={[displayFlex]}>
                <div css={[navIcons]}>
                  {/* <Link to="/" onClick={logout}>
                  <LogoutSvg />
                </Link> */}
                  <ModalBoxAdd height={24} width={24} />
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
                    {/* <UserSvg /> */}
                    {userImage && <UserProfileImg userImage={userImage} />}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
        <Route exact path="/uploadPage">
          <UploadPage
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
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path={`/posting/:postingId`}>
          <PostPageDetail
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
          />
        </Route>
      </Switch>
      <Fab color="primary" aria-label="add">
        <ModalBoxAdd height={50} width={38} />
      </Fab>
    </Router>
  );
}

const topHeaderWidth = css`
  display: flex;
  width: 100%;
  max-width: 1015px;
`;

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
  margin-left: 45px;
  font-size: 30px;
  flex: 1 10000 0%;
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
