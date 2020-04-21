import axios from 'axios';

const TASKS_URL = 'http://ec2-13-209-40-94.ap-northeast-2.compute.amazonaws.com:8000/SearchPage';

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
