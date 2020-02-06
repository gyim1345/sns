import { getPosts as apiGetPosts } from './apis/post';


export const fetchPosts = () => {
    try {
      return await apiGetPosts();
    } catch (e) {
      console.error(e);
    }
  };

