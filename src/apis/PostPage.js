import axios from 'axios';
import TASK_URL from './taskurl';

const TASKS_URL = TASK_URL;

export const getUserInfoAPI = async user => {
  const { data } = await axios.get(
    `${TASKS_URL}/profile/Info`,
    {
      params: {
        user: user
      }
    },
    { withCredentials: true }
  );
  return data;
};

export const editNickNameApi = async input => {
  const { data } = await axios.patch(
    `${TASKS_URL}/profile/Info/NickName`,
    { input },
    { withCredentials: true }
  );
  return data;
};

export const editIntroductoryApi = async input => {
  const { data } = await axios.patch(
    `${TASKS_URL}/profile/Info/Introductory`,
    { input },
    { withCredentials: true }
  );
  return data;
};
