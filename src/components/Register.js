import React from "react";
import { useForm } from "react-hook-form";
import userStore from "../stores/userStore";

const Register = () => {
  const { register, handleSubmit } = useForm();
  
  const checkRegistered = () => {
    return !userStore.userList.find(user => user.name === data.Id);
  }
  
  const createUserOnRegister = () => {
    return userStore.createUser(data.Id, data.Password)
  }

  const onSubmit = data => {
    checkRegistered ? (
      createUserOnRegister;
      alert("Registered! Please login!") 
    )
    : alert("already registered");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>[Register] Id:</span>
      <input name="Id" defaultValue="" ref={register} />
      <label>password:</label>
      <input
        name="Password"
        defaultValue=""
        ref={register({ required: true, maxLength: 10 })}
      />
      <input type="submit" />
    </form>
  );
};

export default Register;
