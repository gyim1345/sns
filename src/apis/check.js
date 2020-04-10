import axios from "axios";

const TASKS_URL = "http://localhost:3000/auth";

export const checkStatus = async (currentUser, userOfActivePage) => {
  const { data } = await axios.post(
    `${TASKS_URL}/changeStatus`,
    {
      currentUser,
      userOfActivePage
    },
    { withCredentials: true }
  );
    console.log(data)
  return data;
};

export const checkIfLoggedIn = async () => {
  const { data } = await axios.get(`${TASKS_URL}/getStatus`, {
    withCredentials: true
  });
  return data;
};

