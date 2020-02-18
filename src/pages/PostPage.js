import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";
import { getUserPostOnly } from "../apis/post";

function PostPage({ userOfActivePage, setUserOfActivePage, currentUser }) {
  const sizeOfPicture = { width: "320px", height: "200px" };
  const [posting, setPosting] = useState([]);

  const getPostingOfCurrentUser = async () => {
    const { posts } = await getUserPostOnly(userOfActivePage);
    setPosting(posts);
  };
  useEffect(() => {
    getPostingOfCurrentUser();
  }, []);

  return (
    <>
      <UserInfoHead userOfActivePage={userOfActivePage} />
      <div>
        <Addpost
          posting={posting}
          setPosting={setPosting}
          currentUser={currentUser}
        />
        <PostingList
          posting={posting}
          setPosting={setPosting}
          sizeOfPicture={sizeOfPicture}
          userOfActivePage={userOfActivePage}
          setUserOfActivePage={setUserOfActivePage}
          currentUser={currentUser}
        />
      </div>
    </>
  );
}

PostPage.propTypes = {
  user: PropTypes.string,
  userOfActivePage: PropTypes.string,
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string,
  globalState: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  setGlobalState: PropTypes.elementType
};

PostPage.defaultProps = {
  user: "",
  setUserOfActivePage: {},
  currentUser: "",
  globalState: [],
  setGlobalState: ""
};

export default PostPage;
