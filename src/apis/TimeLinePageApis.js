import axios from "axios";

const TASKS_URL = "http://localhost:3000";

export const getUserTimeLinePosts = async user => {
  const { data } = await axios.post(
    `${TASKS_URL}/TimeLine/${user}`,
    { user },
    {
      withCredentials: true
    }
  );
  return data;
};

export const getRandomUser = async () => {
  const { data } = await axios.get(`${TASKS_URL}/TimeLine/randomUser`, {
    withCredentials: true
  });
  console.log('aaaaaaaaaaaaaaaaaaaaa', data);
  return data;
};
