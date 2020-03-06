import axios from "axios";

const TASKS_URL = "http://localhost:3000/login";

export const setLoginAPI = async ({ Id, Password }) => {
  console.log("undefinaaaaaaaaed");
  const { data } = await axios.post(
    TASKS_URL,
    { Id, Password },
    { withCredentials: true }
  );
  console.log('asdasd', data);
  return data;
};

export const deleteLoginStatus = async () =>{
  console.log("delete session");
  const { data } = await axios.delete(TASKS_URL, { withCredentials: true } )
  console.log(data);
  return data;
}
