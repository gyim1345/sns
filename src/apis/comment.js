import axios from 'axios';
const TASKS_URL =
  'http://ec2-13-209-40-94.ap-northeast-2.compute.amazonaws.com:8000/comments/';

export const getCommentFromIdAPI = async id => {
  const { data } = await axios.get(`${TASKS_URL}${id}`, { id });
  console.log(data);
  return data;
};

export const addCommentForPost = async (
  postId, //아래 4개가 어떤걸 말하는지.. 그냥 묶어서 post 라고 하면 더 나을듯 싶다
  input,
  username,
  index,
  commentId
) => {
  const { data } = await axios.post(`${TASKS_URL}${postId}`, {
    //path.join 을 쓰면 좋다
    postId,
    input,
    username,
    index,
    commentId
  });
  return data;
};

export const editCommentAPI = async (input, posting, username, index) => {
  const { data } = await axios.patch(
    `${TASKS_URL}edit`,
    {
      input,
      posting,
      username,
      index
    },
    { withCredentials: true }
  );
  return data;
};

export const removeCommentApi = async (posting, index) => {
  const { data } = await axios.patch(
    `${TASKS_URL}${index}`,
    {
      posting,
      index
    },
    { withCredentials: true }
  );
  return data;
};
