import axios from 'axios';
import TASK_URL from './taskurl';

const TASKS_URL = `${TASK_URL}/auth`;

export const checkStatus = async (currentUser, userOfActivePage) => {
  const { data } = await axios.post(
    `${TASKS_URL}/changeStatus`,
    {
      currentUser,
      userOfActivePage
    },
    { withCredentials: true }
  );
  return data;
};

export const checkIfLoggedIn = async () => {
  const { data } = await axios.get(`${TASKS_URL}/getStatus`, {
    withCredentials: true
  });
  return data;
};
