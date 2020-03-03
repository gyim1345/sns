import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";
import { getUserPostOnly } from "../apis/post";
import { Global, css, jsx } from "@emotion/core";
import { useParams } from "react-router-dom";
import { checkStatus } from "../apis/check";
import ModalBoxAdd from "../components/ModalBoxAdd";


function PostPage({
  userOfActivePage,
  setUserOfActivePage,
  currentUser,
  setLoggedIn,
  setCurrentUser
}) {
  const sizeOfPicture = { width: "600px"};
  const [posting, setPosting] = useState([]);
  const { user } = useParams();
  const [info, setInfo] = useState({
    user: undefined,
    postNumber: undefined,
    followerNumber: undefined,
    image: undefined
  });
  const getPostingOfCurrentUser = async () => {
    const { currentUserAPI } = await checkStatus(currentUser, user);
    setUserOfActivePage(user);
    setCurrentUser(currentUserAPI);
    const { posts } = await getUserPostOnly(user);
    setPosting(posts);
    setLoggedIn(true);
  };
  useEffect(() => {
    getPostingOfCurrentUser();
  }, [user]);
  return (
    <>
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

// PostPage.propTypes = {
//   user: PropTypes.string,
//   userOfActivePage: PropTypes.string,
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string,
//   globalState: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
//   setGlobalState: PropTypes.elementType
// };

// PostPage.defaultProps = {
//   user: "",
//   setUserOfActivePage: {},
//   currentUser: "",
//   globalState: [],
//   setGlobalState: ""
// };

export default PostPage;
