import axios from "axios";

const TASKS_URL = "http://localhost:3000/login";

export const setLoginAPI = async ({ Id, Password }) => {
  const { data } = await axios.post(TASKS_URL, { Id, Password });
  return data;
};

