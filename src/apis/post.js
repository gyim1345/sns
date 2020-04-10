import axios from "axios";

const TASKS_URL = "http://localhost:3000";

export const getPosts = async () => {
  const { data } = await axios.get(`${TASKS_URL}`, { withCredentials: true });
  console.log(data);
  return data;
};

// export const logoutApi = async () => {
//   const { data } = await axios.post(`${TASKS_URL}/logout`);
//   console.log(data);
//   return data;
// };

// export const getUserTimeLinePosts = async user => {
//   const { data } = await axios.get(`${TASKS_URL}/TimeLine/${user}`, {
//     withCredentials: true
//   });
//   return data;
// };

export const getUserPostOnly = async user => {
  const { data } = await axios.get(
    `${TASKS_URL}/user`,
    {
      params: {
        user: user
      }
    },
    { withCredentials: true }
  );
  return data;
};

export const getPostIsScrapped = async postId => {
  const { data } = await axios.get(`${TASKS_URL}/posts/scrapped`, {
    params: {
      id: postId
    },
    withCredentials: true
  });
  return data;
};

export const getPostsFromId = async id => {
  const { data } = await axios.get(`${TASKS_URL}/posts/${id}`, { id });
  return data;
};

export const addPostAPI = async (title, user) => {
  const { data } = await axios.post(`${TASKS_URL}/posts/`, { title, user });
  return data;
};

export const editPostAPI = async (input, posting) => {
  const { data } = await axios.patch(
    `${TASKS_URL}/posts/edit`,
    {
      input,
      posting
    },
    { withCredentials: true }
  );
  return data;
};

export const registerAPI = async (id, password) => {
  console.log("asdasdregister");
  const { data } = await axios.post(`${TASKS_URL}/auth/register`, {
    id,
    password
  });
  return data;
};

export const getChangeLike = async posting => {
  const { data } = await axios.patch(
    `${TASKS_URL}/posts/Like`,
    {
      posting
    },
    { withCredentials: true }
  );
  return data;
};

export const removePostApi = async (posting, indexOfCommentOnThisPosting) => {
  const { data } = await axios.patch(
    `${TASKS_URL}/posts/Remove`,
    {
      posting,
      indexOfCommentOnThisPosting
    },
    { withCredentials: true }
  );
  return data;
};

export const getUserInfoAPI = async user => {
  const { data } = await axios.get(
    `${TASKS_URL}/user/Info`,
    {
      params: {
        user: user
      }
    },
    { withCredentials: true }
  );
  return data;
};

export const getUserImage = async user => {
  const { data } = await axios.get(`${TASKS_URL}/user/image`, {
    params: {
      user: user
    }
  });
  return data;
};

export const scrap = async postId => {
  const { data } = await axios.patch(
    `${TASKS_URL}/posts/scrap`,
    { postId },
    { withCredentials: true }
  );
  return data;
};

export const taggedPostsAPI = async user => {
  const { data } = await axios.get(
    `${TASKS_URL}/posts/taggedPosts`,
    { user },
    { withCredentials: true }
  );
  console.log(data);
  return data;
};
