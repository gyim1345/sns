import React from 'react';

import Register from '../components/Register';
import Login from '../components/Login';
import { css } from '@emotion/core';
import Footer from '../components/Footer';

const LoginPage = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  loggedIn,
  currentUser
}) => {
  return (
    <div css={[loginPage]}>
      <div css={[pageElements]}>
        <img
          src={'src/images/cellphone.png'}
          alt=""
          style={{ paddingTop: '80px', maxWidth: '400px' }}
        />
        <div css={[boxParent]}>
          <div css={[box]}>
            <Login
              setUserOfActivePage={setUserOfActivePage}
              setCurrentUser={setCurrentUser}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
              currentUser={currentUser}
            />
            <Register />
          </div>
          <div style={{ paddingTop: '40px' }}>
            앱을 다운로드하지 마세요
            <div css={[storePicturesCss]}>
              <img
                src={'src/images/AppStore.png'}
                alt=""
                style={{ width: '125px', height: '35px' }}
              />
              <img
                src={'src/images/googlestore.png'}
                alt=""
                style={{ width: '125px', height: '35px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const storePicturesCss = css`
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

const pageElements = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const boxParent = css`
  position: relative;
  top: 80px;
  left: 25px;
`;

const loginPage = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -100px;
`;

const box = css`
  margin-top: 30px;
  display: -webkit-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  display: inline-flex;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  padding: 0px 55px 55px 55px;
`;

// LoginPage.propTypes = {
//   setUserOfActivePage: PropTypes.func,
//   setCurrentUser: PropTypes.func,
//   toggleLogInStatus: PropTypes.func,
//   setLoggedIn: PropTypes.func,
//   loggedIn: PropTypes.bool,
//   currentUser: PropTypes.string
// };

// LoginPage.defaultProps = {
//   setUserOfActivePage: {},
//   setCurrentUser: {},
//   toggleLogInStatus: {},
//   setLoggedIn: {},
//   loggedIn: false,
//   currentUser: ""
// };

export default LoginPage;
