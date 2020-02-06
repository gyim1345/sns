// /* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import Register from "../components/Register";
import Login from "../components/Login";

const LoginPage = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  toggleLogInStatus,
  loggedIn,
  currentUser
}) => {

  



  return (
    <>
      <Login
        setUserOfActivePage={setUserOfActivePage}
        setCurrentUser={setCurrentUser}
        setLoggedIn={setLoggedIn}
        toggleLogInStatus={toggleLogInStatus}
        loggedIn={loggedIn}
        currentUser={currentUser}
      />
      <Register />
    </>
  );
};

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
