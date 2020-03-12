import React from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { css } from "@emotion/core";

const LoginPage = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  loggedIn,
  currentUser
}) => {
  return (
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
  );
};

const box = css`
  display: -webkit-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  display: inline-flex;
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
