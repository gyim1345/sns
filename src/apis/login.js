import axios from 'axios';

const TASKS_URL = 'http://localhost:3000/auth/login';

export const setLoginAPI = async ({ Id, Password }) => {
  const { data } = await axios.post(
    TASKS_URL,
    { Id, Password },
    { withCredentials: true }
  );
  return data;
};

export const deleteLoginStatus = async () => {
  const { data } = await axios.delete(TASKS_URL, { withCredentials: true });
  return data;
};
