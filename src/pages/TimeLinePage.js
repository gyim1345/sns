/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import PostingList from "../components/PostingList";
import { getUserTimeLinePosts } from "../apis/TimeLinePageApis";
import { checkStatus } from "../apis/check";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";
function TimeLinePage({
  setUserOfActivePage,
  currentUser,
  setCurrentUser,
  setLoggedIn
}) {
  const sizeOfPicture = { width: "600px" };
  const [posting, setPosting] = useState([]);
  const getUserTimeLinePostsAPI = async () => {
    const { currentUserAPI } = await checkStatus();
    setUserOfActivePage(currentUserAPI);
    setCurrentUser(currentUserAPI);
    const { posts } = await getUserTimeLinePosts(currentUserAPI);
    setPosting(posts);
    setLoggedIn(true);
  };
  useEffect(() => {
    getUserTimeLinePostsAPI();
  }, []);

  return (
    <>
      <div css={[timeLineCss]}>
        <div>
          <PostingList
            posting={posting}
            setPosting={setPosting}
            sizeOfPicture={sizeOfPicture}
            userOfActivePage={currentUser}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </div>
        <UserInfo user={currentUser} posting={posting} />
      </div>
      {/* )} */}
      <Footer />
    </>
  );
}

const timeLineCss = css`
  margin-left: -300px;
  display: flex;
  justify-content: center;
`;

// TimeLinePage.propTypes = {
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string
// };

// TimeLinePage.defaultProps = {
//   setUserOfActivePage: "",
//   currentUser: ""
// };

export default TimeLinePage;
