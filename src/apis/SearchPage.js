import axios from "axios";``

const TASKS_URL = "http://localhost:3000/SearchPage";

export const getPosts = async () => {
  const { data } = await axios.get(`${TASKS_URL}`, { withCredentials: true });
  return data;
};

export const searchPosts = async input => {
  const { data } = await axios.get(`${TASKS_URL}/tag`, {
    params: {
      input
    },
  });
  return data;
};
