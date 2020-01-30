import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import uStore from "../stores/userStore";

const Login = ({
  setUser,
  setGlobalUser,
  setLoggedIn,
  logStatus,
  loggedIn,
  globalUser
}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    if (uStore.userList.find(item => item.name === data.Id) === undefined)
      // 입력한 아이디가 store에 없을 경우
      alert("check id");
    else if (uStore.getUserPassword(data.Id) !== data.Password)
      // 입력한 아이디의 비번이 안 맞을 경우
      alert("check password");
    else {
      setGlobalUser(data.Id);
      setUser(data.Id);
      logStatus();
      alert("logged in");
      setLoggedIn(true);
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
      {loggedIn && <Redirect to={`/${globalUser}/TimeLine`} />}
    </>
  );
};

Login.propTypes = {
  setUser: PropTypes.func,
  setGlobalUser: PropTypes.func,
  logStatus: PropTypes.func,
  setLoggedIn: PropTypes.func,
  loggedIn: PropTypes.bool,
  globalUser: PropTypes.string
};

Login.defaultProps = {
  setUser: {},
  setGlobalUser: {},
  logStatus: {},
  setLoggedIn: {},
  loggedIn: false,
  globalUser: ""
};

export default Login;
