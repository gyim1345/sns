import axios from 'axios';

const TASKS_URL =
  'http://ec2-13-209-40-94.ap-northeast-2.compute.amazonaws.com:8000';

export const scrappedPosts = async user => {
  const { data } = await axios.get(
    `${TASKS_URL}/posts/scrappedPosts?user=${user}`,
    {
      params: {
        user: user
      }
    }
  );
  return data;
};
