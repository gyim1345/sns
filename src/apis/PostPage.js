import axios from "axios";

const TASKS_URL = "http://localhost:3000";

export const getUserInfoAPI = async user => {
  console.log(user,'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
  const { data } = await axios.post(
    `${TASKS_URL}/user/Info`,
    { user },
    { withCredentials: true }
  );
  console.log(data);
  return data;
};

export const editNickNameApi = async input => {
  console.log(input);
  const { data } = await axios.patch(
    `${TASKS_URL}/user/Info/NickName`,
    { input },
    { withCredentials: true }
  );
  console.log(data);
  return data;
};

export const editIntroductoryApi = async input => {
  console.log(input);
  const { data } = await axios.patch(
    `${TASKS_URL}/user/Info/Introductory`,
    { input },
    { withCredentials: true }
  );
  console.log(data);
  return data;
};
