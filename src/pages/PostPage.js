import React from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";

function PostPage({ globalState, setGlobalState, userOfActivePage, setUserOfActivePage, currentUser }) {
  const sizeOfPicture = "40%";

  return (
    <>
      <UserInfoHead globalState={globalState} userOfActivePage={userOfActivePage} />
      <div>
        <Addpost
          globalState={globalState}
          setGlobalState={setGlobalState}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
        />
        <PostingList
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
