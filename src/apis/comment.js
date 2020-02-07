import axios from 'axios';
const TASKS_URL = 'http://localhost:3000/comments/'

export const getCommentFromIdAPI = async (id) => {
    console.log('apisid',id)
    const { data } = await axios.post(`${TASKS_URL}${id}`, { id });
    console.log('apis data', data)
    return data;
  };