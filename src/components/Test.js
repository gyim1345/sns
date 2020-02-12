import { fetchPosts } from "../taskService";

export const Test = async () => {
  try {
    return await fetchPosts();
  } catch (e) {
    console.log(e);
  }
};
