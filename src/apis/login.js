import axios from 'axios';

const TASKS_URL =
  'http://ec2-15-164-93-251.ap-northeast-2.compute.amazonaws.com:8000/auth/login';

export const setLoginAPI = async ({ Id, Password }) => {
  const { data } = await axios.post(
    TASKS_URL,
    { Id, Password },
    { withCredentials: true }
  );
  return data;
};

export const deleteLoginStatus = async () => {
  const { data } = await axios.delete(TASKS_URL, { withCredentials: true });
  return data;
};
