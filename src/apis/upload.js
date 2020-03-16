import axios from "axios";

const TASKS_URL = "http://localhost:3000/upload";

export const uploadPicture = async formData => {
  const { data } = await axios.post(`${TASKS_URL}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    withCredentials: true
  });
  return data;
};

export const uploadUserImage = async formData => {
  const { data } = await axios.post(`${TASKS_URL}/userImage`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    withCredentials: true
  });
  return data;
};
