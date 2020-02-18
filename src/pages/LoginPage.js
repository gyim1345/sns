// /* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import Register from "../components/Register";
import Login from "../components/Login";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

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

LoginPage.propTypes = {
  setUserOfActivePage: PropTypes.func,
  setCurrentUser: PropTypes.func,
  toggleLogInStatus: PropTypes.func,
  setLoggedIn: PropTypes.func,
  loggedIn: PropTypes.bool,
  currentUser: PropTypes.string
};

LoginPage.defaultProps = {
  setUserOfActivePage: {},
  setCurrentUser: {},
  toggleLogInStatus: {},
  setLoggedIn: {},
  loggedIn: false,
  currentUser: ""
};

export default LoginPage;
