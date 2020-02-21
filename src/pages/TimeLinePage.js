/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import { getUserTimeLinePosts } from "../apis/post";
import { useParams } from "react-router-dom";
import checkStatus from "../apis/check";

function TimeLinePage({
  setUserOfActivePage,
  currentUser,
  setCurrentUser,
  setLoggedIn,
  userOfActivePage
}) {
  const sizeOfPicture = { width: "320px", height: "200px" };
  const [posting, setPosting] = useState([]);
  const getUserTimeLinePostsAPI = async () => {
    const { response } = await checkStatus(currentUser);
    setUserOfActivePage(response);
    setCurrentUser(response);
    const { posts } = await getUserTimeLinePosts(response);
    setPosting(posts);
    setLoggedIn(true);
  };
  useEffect(() => {
    getUserTimeLinePostsAPI();
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

TimeLinePage.propTypes = {
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string
};

TimeLinePage.defaultProps = {
  setUserOfActivePage: "",
  currentUser: ""
};

export default TimeLinePage;
