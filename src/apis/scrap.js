import axios from "axios";

const TASKS_URL = "http://localhost:3000";

export const scrappedPosts = async user => {
  const { data } = await axios.get(`${TASKS_URL}/scrappedPosts?user=${user}`, {
    params: {
      user: user
    }
  });
  return data;
};
