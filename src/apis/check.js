import axios from "axios";

const TASKS_URL = "http://localhost:3000/check";

export const checkStatus = async (currentUser, userOfActivePage) => {
  const { data } = await axios.post(
    TASKS_URL,
    {
      currentUser,
      userOfActivePage
    },
    { withCredentials: true }
  );
  return data;
};

export const checkIfLoggedIn = async () => {
  const { data } = await axios.get(TASKS_URL, { withCredentials: true });
  return data;
};
