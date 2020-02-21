import axios from "axios";

const TASKS_URL = "http://localhost:3000";

export const getPosts = async () => {
  const { data } = await axios.get(`${TASKS_URL}`);
  return data;
};

export const getUserTimeLinePosts = async user => {
  const { data } = await axios.post(`${TASKS_URL}/TimeLine/${user}`, { user });
  return data;
};

export const getUserPostOnly = async user => {
  const { data } = await axios.post(`${TASKS_URL}/user`, { user });
  return data;
};

export const getPostsFromId = async id => {
  const { data } = await axios.get(`${TASKS_URL}/posts/${id}`, { id });
  return data;
};

export const addPostAPI = async (title, user) => {
  const { data } = await axios.patch(`${TASKS_URL}/posts/`, { title, user });
  return data;
};

export const editPostAPI = async (
  input,
  posting,
  user,
  indexOfCommentOnThisPosting
) => {
  const { data } = await axios.patch(`${TASKS_URL}/posts/edit`, {
    input,
    posting,
    user,
    indexOfCommentOnThisPosting
  });
  return data;
};

export const registerAPI = async (id, password) => {
  const { data } = await axios.post(`${TASKS_URL}/posts/register`, { id, password });
  return data;
};

export const getChangeLike = async (posting, currentUser, postingAll) => {
  const { data } = await axios.patch(`${TASKS_URL}/posts/Like`, {
    posting,
    currentUser,
    postingAll
  });
  return data;
};

export const removePostApi = async (
  posting,
  user,
  indexOfCommentOnThisPosting
) => {
  const { data } = await axios.patch(`${TASKS_URL}/posts/Remove`, {
    posting,
    user,
    indexOfCommentOnThisPosting
  });
  return data;
};

export const getUserInfoAPI = async user => {
  const { data } = await axios.post(`${TASKS_URL}/user/Info`, { user });
  return data;
};
