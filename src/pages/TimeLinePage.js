import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import { getUserTimeLinePosts } from "../apis/post";

function TimeLinePage({ setUserOfActivePage, currentUser }) {
  const sizeOfPicture = { width: "320px", height: "200px" };
  const [posting, setPosting] = useState([]);
  const getUserTimeLinePostsAPI = async () => {
    const { posts } = await getUserTimeLinePosts(currentUser);
    setPosting(posts);
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
