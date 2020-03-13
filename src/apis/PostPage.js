import axios from "axios";

const TASKS_URL = "http://localhost:3000/PostPage";

export const getUserInfoAPI = async user => {
  console.log(user);
  const { data } = await axios.post(
    `${TASKS_URL}/user/Info`,
    { user },
    { withCredentials: true }
  );
  console.log(data);
  return data;
};

