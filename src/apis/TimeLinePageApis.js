import axios from 'axios';
import TASK_URL from './taskurl';

const TASKS_URL = TASK_URL;

export const getUserTimeLinePosts = async user => {
  const { data } = await axios.get(`${TASKS_URL}/Timeline/${user}`, {
    params: {
      user: user
    },
    withCredentials: true
  });
  return data;
};

export const getRandomUser = async () => {
  const { data } = await axios.get(`${TASKS_URL}/TimeLine/randomUser`, {
    withCredentials: true
  });
  return data;
};

export const AddFollower = async name => {
  const { data } = await axios.patch(
    `${TASKS_URL}/TimeLine/AddFriend`,
    { name },
    {
      withCredentials: true
    }
  );
  return data;
};
