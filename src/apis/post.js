import axios from 'axios';

const TASKS_URL = 'http://localhost:3000';


export const getPosts = async () => {
  const { data } = await axios.get(`${TASKS_URL}/posts`);
  // console.log(data)
  return data;
};
// because get requests doesn't have a body use query params instead or use post

export const getUserTimeLinePosts = async (user) => {
  const { data } = await axios.post(`${TASKS_URL}/TimeLine`, {user})
  return data;
};

export const getUserPostOnly = async (user) => {
  const { data } = await axios.post(`${TASKS_URL}/user`, {user})
  return data;
};

export const getPostsFromId = async (id) => {
  const { data } = await axios.get(`${TASKS_URL}/posts/${id}`, { id });
  // console.log(data)
  return data;
};

export const addPostAPI = async (title, user) => {
  const { data } = await axios.patch(`${TASKS_URL}/posts`, { title, user });
  return data;
};

export const editPostAPI = async (input, posting, user, indexOfCommentOnThisPosting) => {
  const { data } = await axios.patch(`${TASKS_URL}/postsedit`, { input, posting, user, indexOfCommentOnThisPosting });
  return data;
};

export const registerAPI = async (id, password) => {
  const { data } = await axios.post(`${TASKS_URL}/register`, {id, password})
  return data
};

export const getChangeLike = async (posting, currentUser, postingAll) => {
  const { data } = await axios.patch(`${TASKS_URL}/postLike`, {posting, currentUser, postingAll} )
  return data
}

// export const remove  PostApi = async (id, user) => {
//   console.log(id, user)
//   const { data }  = await axios.delete(`${TASKS_URL}/${id}`, { id });
//   console.log(data)
//   return data;
// };

export const removePostApi = async (posting, user, indexOfCommentOnThisPosting) => {
  const { data }  = await axios.patch(`${TASKS_URL}/postsRemove`, { posting, user, indexOfCommentOnThisPosting });
  return data;
}

export const getUserInfoAPI = async (user) => {
  console.log(user)
  const { data } = await axios.post(`${TASKS_URL}/userInfo`, { user });
  console.log(data)
  return data;
};

// export const removeTask = async (id) => {
//   const { data } = await axios.delete(TASKS_URL + `/${id}`);
//   return data;
// };

// export const toggleTask = async (id) => {
//   const { data } = await axios.patch(TASKS_URL + `/${id}`);
//   return data;
// }n