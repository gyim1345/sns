import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";
import { getUserPostOnly } from "../apis/post";
import { Global, css, jsx } from "@emotion/core";
import { useParams } from "react-router-dom";
import checkStatus from "../apis/check";

function PostPage({
  userOfActivePage,
  setUserOfActivePage,
  currentUser,
  setLoggedIn,
  setCurrentUser,
}) {
  const sizeOfPicture = { width: "320px", height: "200px" };
  const [posting, setPosting] = useState([]);
  const { user } = useParams();

  const getPostingOfCurrentUser = async () => {
    const { response, activeUser } = await checkStatus(currentUser, user);
    setUserOfActivePage(user);
    setCurrentUser(response);
    const { posts } = await getUserPostOnly(user);
    setPosting(posts);
    setLoggedIn(true);
  };
  useEffect(() => {
    getPostingOfCurrentUser();
  }, [user]);
  return (
    <>
      <UserInfoHead user={user} />
      <div css={[flexCenterColumn]}>
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

const flexCenterColumn = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

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
