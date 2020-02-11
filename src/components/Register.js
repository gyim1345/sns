import React from "react";
import { useForm } from "react-hook-form";
import uStore from "../stores/userStore";
import { registerAPI } from "../apis/post";

const Register = () => {
  const { register, handleSubmit } = useForm();
 
  // const checkRegistered = (data) => {
  //   return !uStore.userList.find(user => user.name === data.Id);
  // }
  
  // const createUserOnRegister = (data) => {
  //   return uStore.createUser(data.Id, data.Password)
  // }

  const registration = async (data) => {
    try {
          const response = await registerAPI(data.Id, data.Password)
          // console.log(response)
        } catch(e) {
      console.log(e)
    }
  }

  // const onSubmit = data => {
  //   checkRegistered(data) ? (
  //     createUserOnRegister(data),
  //     alert("Registered! Please login!") 
  //   )
  //   : alert("already registered");
  // };


  return (
    <form onSubmit={handleSubmit(registration   )}>
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
