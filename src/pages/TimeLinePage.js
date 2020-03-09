/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import { getUserTimeLinePosts } from "../apis/TimeLinePageApis";
import { useParams } from "react-router-dom";
import { checkStatus } from "../apis/check";

function TimeLinePage({
  setUserOfActivePage,
  currentUser,
  setCurrentUser,
  setLoggedIn,
  userOfActivePage
}) {
  const sizeOfPicture = { width: "600px"};
  const [posting, setPosting] = useState([]);

  const getUserTimeLinePostsAPI = async () => {
    console.log('tdhdfgdg')
    const { currentUserAPI } = await checkStatus();
    console.log('fuck timeline', currentUserAPI)
    setUserOfActivePage(currentUserAPI);
    setCurrentUser(currentUserAPI);
    const { posts } = await getUserTimeLinePosts(currentUserAPI);
    console.log(posts)
    setPosting(posts);
    setLoggedIn(true);
  };
  useEffect(() => {
    getUserTimeLinePostsAPI();
    console.log('tdhdfgdg')

  }, []);

  return (
    <>
      {/* {postingStorage.getuserPosts(currentUser)[0] === undefined ? (
        <li>Go to Your user home and add some stuff RIGHT NOW!</li>
      ) : ( */}
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
      {/* )} */}
    </>
  );
}

// TimeLinePage.propTypes = {
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string
// };

// TimeLinePage.defaultProps = {
//   setUserOfActivePage: "",
//   currentUser: ""
// };

export default TimeLinePage;
