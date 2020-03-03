import axios from "axios";

const TASKS_URL = "http://localhost:3000";

export const getUserTimeLinePosts = async user => {
  const { data } = await axios.post(`${TASKS_URL}/TimeLine/${user}`, { user }, {
    withCredentials: true
  });
  return data;
};
