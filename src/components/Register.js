import React from "react";
import { useForm } from "react-hook-form";
import { registerAPI } from "../apis/post";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const registration = async data => {
    try {
      const response = await registerAPI(data.Id, data.Password);
      alert(response.Message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(registration)}>
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
