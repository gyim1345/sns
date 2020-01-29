import React from "react";
import { useForm } from "react-hook-form";
import uStore from "../stores/userStore";

const LoginPage = ({ setUser, setGlobalUser, setLoggedIn, logStatus }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    if (
      uStore.getUserPassword(data.Id) === data.Password &&
      uStore.getUserName(data.Id) !== undefined
    ) {
      setGlobalUser(data.Id);
      setUser(data.Id);
      logStatus();
      alert('logged in')
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      login:
      <label>Id</label>
      <input name="Id" defaultValue="test" ref={register} />
      <label>password</label>
      <input
        name="Password"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}; // your form submit function which will invoke after successful validation

export default LoginPage;
