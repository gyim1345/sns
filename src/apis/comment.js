import axios from 'axios';
const TASKS_URL = 'http://localhost:3000/comments/'

export const getCommentFromIdAPI = async (id) => {
    const { data } = await axios.get(`${TASKS_URL}${id}`, { id });
    return data;
  };

// export const addCommentForPost = async(id) => {
//   const { data } = await.post(`${TASKS_URL}`)
// }