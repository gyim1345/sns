import axios from 'axios';

const TASKS_URL = 'http://ec2-13-209-40-94.ap-northeast-2.compute.amazonaws.com:8000';

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
