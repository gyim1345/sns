import React, { useState, useEffect } from "react";
import UserInfoHead from "../components/UserInfoHead";
import { getUserPostOnly } from "../apis/post";
import { css } from "@emotion/core";
import { useParams } from "react-router-dom";
import { checkStatus } from "../apis/check";
import ModalBoxAdd from "../components/ModalBoxAdd";
import PostsForPostPage from "../components/PostsForPostPage";
function PostPage({
  setUserOfActivePage,
  currentUser,
  setLoggedIn,
  setCurrentUser
}) {
  const [posting, setPosting] = useState([]);
  const { user } = useParams();
  console.log('params',user)

  const [info, setInfo] = useState({
    user: undefined,
    postNumber: undefined,
    followerNumber: undefined,
    image: undefined,
    usernickName: undefined,
    userIntroductory: undefined
  });
  const getPostingOfCurrentUser = async () => {
    const { sessionUserName } = await checkStatus(currentUser, user);
    console.log('qqqqqqqqqqqqqqqq', sessionUserName)
    setUserOfActivePage(user);
    setCurrentUser(sessionUserName);
    const { posts } = await getUserPostOnly(user);
    setPosting(posts);
    setLoggedIn(true);
  };
  useEffect(() => {
    getPostingOfCurrentUser();
  }, [user]);
  return (
    <>
      <div css={[postPageCss]}>
        <UserInfoHead
          user={user}
          info={info}
          setInfo={setInfo}
          posting={posting}
        />
        <div css={[flexCenterColumn]}>
          <ModalBoxAdd
            posting={posting}
            setPosting={setPosting}
            currentUser={currentUser}
          />
          <PostsForPostPage
            posting={posting}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
  );
}

const postPageCss = css`
  position: relative;
  top: 100px;
`;

const flexCenterColumn = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// PostPage.propTypes = {
//   user: PropTypes.string,
//   userOfActivePage: PropTypes.string,
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string,

// };

// PostPage.defaultProps = {
//   user: "",
//   setUserOfActivePage: {},
//   currentUser: "",

// };

export default PostPage;
