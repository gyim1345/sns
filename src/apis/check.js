import axios from "axios";

const TASKS_URL = "http://localhost:3000";

const checkStatus = async (currentUser, userOfActivePage) => {
  const { data } = await axios.post(TASKS_URL, { currentUser, userOfActivePage });
  return data;
};

export default checkStatus;
