import axios from 'axios';
import TASK_URL from './taskurl';

const TASKS_URL = `${TASK_URL}/SearchPage`;

export const getPosts = async () => {
  const { data } = await axios.get(`${TASKS_URL}`, { withCredentials: true });
  return data;
};

export const searchPosts = async input => {
  const { data } = await axios.get(`${TASKS_URL}/tag`, {
    params: {
      input
    }
  });
  return data;
};
