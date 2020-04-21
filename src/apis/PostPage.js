import axios from 'axios';

const TASKS_URL =
  'http://ec2-15-164-93-251.ap-northeast-2.compute.amazonaws.com:8000';

export const getUserInfoAPI = async user => {
  const { data } = await axios.post(
    `${TASKS_URL}/user/Info`,
    { user },
    { withCredentials: true }
  );
  return data;
};

export const editNickNameApi = async input => {
  const { data } = await axios.patch(
    `${TASKS_URL}/user/Info/NickName`,
    { input },
    { withCredentials: true }
  );
  return data;
};

export const editIntroductoryApi = async input => {
  const { data } = await axios.patch(
    `${TASKS_URL}/user/Info/Introductory`,
    { input },
    { withCredentials: true }
  );
  return data;
};
