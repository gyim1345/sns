import axios from 'axios';

const TASKS_URL = 'http://localhost:3000/posts';


export const getPosts = async () => {
  const { data } = await axios.get(TASKS_URL);
  // console.log(data)
  return data;
};
// because get requests doesn't have a body use query params instead or use post

export const getUserTimeLinePosts = async (user) => {
  const { data } = await axios.post(`http://localhost:3000/TimeLine`, {user})
  return data;
};

export const getUserPostOnly = async (user) => {
  const { data } = await axios.post(`http://localhost:3000/user`, {user})
  return data;
};

export const getPostsFromId = async (id) => {
  const { data } = await axios.get(`${TASKS_URL}/${id}`, { id });
  // console.log(data)
  return data;
};

export const addPostAPI = async (title, user) => {
  const { data } = await axios.patch(TASKS_URL, { title, user });
  return data;
};

export const editPostAPI = async (input, posting, user, indexOfCommentOnThisPosting) => {
  const { data } = await axios.patch(`${TASKS_URL}edit`, { input, posting, user, indexOfCommentOnThisPosting });
  return data;
};

export const removePostApi = async (id, user) => {
  console.log(id, user)
  const { data }  = await axios.delete(`${TASKS_URL}/${id}`, { id });
  console.log(data)
  return data;
};

// export const removePostApi = async (posting, user, indexOfCommentOnThisPosting) => {
//   console.log(posting, user)
//   const { data }  = await axios.patch(`${TASKS_URL}Remove`, { posting, user, indexOfCommentOnThisPosting });
//   console.log(data)
//   return data;
// }

// export const removeTask = async (id) => {
//   const { data } = await axios.delete(TASKS_URL + `/${id}`);
//   return data;
// };

// export const toggleTask = async (id) => {
//   const { data } = await axios.patch(TASKS_URL + `/${id}`);
//   return data;
// }n