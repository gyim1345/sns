import axios from 'axios';
import TASK_URL from './taskurl';

const TASKS_URL = `${TASK_URL}/auth/login`;

export const setLoginAPI = async ({ Id, Password }) => {
  const response = await axios.post(
    TASKS_URL,
    { Id, Password },
    { withCredentials: true }
  );
  console.log(response)
  const { data } = response;
  return data;
};

export const deleteLoginStatus = async () => {
  const { data } = await axios.delete(TASKS_URL, { withCredentials: true });
  return data;
};
