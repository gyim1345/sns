import axios from 'axios';
import TASK_URL from './taskurl';

const TASKS_URL = TASK_URL;

export const scrappedPosts = async user => {
  const { data } = await axios.get(
    `${TASKS_URL}/posts/scrappedPosts?user=${user}`,
    {
      params: {
        user: user
      }
    }
  );
  return data;
};
