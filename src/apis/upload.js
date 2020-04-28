import axios from 'axios';
import TASK_URL from './taskurl';

const TASKS_URL = `${TASK_URL}/upload`;

export const uploadPicture = async formData => {
  const { data } = await axios.post(`${TASKS_URL}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    withCredentials: true
  });
  return data;
};

export const uploadUserImage = async formData => {
  const { data } = await axios.patch(`${TASKS_URL}/userImage`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    withCredentials: true
  });
  return data;
};
