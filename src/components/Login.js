import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { setLoginAPI } from "../apis/login";

const Login = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  loggedIn,
  currentUser
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    try {
      const response = await setLoginAPI(data);
      alert(response.statusMessage);
      response.loginStatus &&
        (setCurrentUser(data.Id), setUserOfActivePage(data.Id));
      setLoggedIn(response.loginStatus);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>[Login] </span>
        <label>Id: </label>
        <input name="Id" defaultValue="" ref={register} />
        <label>password:</label>
        <input
          name="Password"
          defaultValue=""
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.exampleRequired && <p>This field is required</p>}
        <input type="submit" />
      </form>
      {loggedIn && <Redirect to={`/${currentUser}/TimeLine`} />}
    </>
  );
};

Login.propTypes = {
  setUserOfActivePage: PropTypes.func,
  setCurrentUser: PropTypes.func,
  setLoggedIn: PropTypes.func,
  loggedIn: PropTypes.bool,
  currentUser: PropTypes.string
};

Login.defaultProps = {
  setUserOfActivePage: {},
  setCurrentUser: {},
  setLoggedIn: {},
  loggedIn: false,
  currentUser: ""
};

export default Login;
