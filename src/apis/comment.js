import axios from "axios";
const TASKS_URL = "http://localhost:3000/posts/comments/";

export const getCommentFromIdAPI = async id => {
  const { data } = await axios.get(`${TASKS_URL}${id}`, { id });
  return data;
};

export const addCommentForPost = async (
  postId,
  inputa,
  currentUser,
  isUnder
) => {
  const { data } = await axios.post(`${TASKS_URL}${postId}`, {
    postId,
    inputa,
    currentUser,
    isUnder
  });
  return data;
};
