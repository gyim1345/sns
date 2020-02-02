import React from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";

function PostPage({ globalStateForTestingPurpose, setGlobalStateForTestingPurpose, userOfActivePage, setUserOfActivePage, currentUser }) {
  const sizeOfPicture = "40%";

  return (
    <>
      <UserInfoHead userOfActivePage={userOfActivePage} />
      <div>
        <Addpost
          globalStateForTestingPurpose={globalStateForTestingPurpose}
          setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
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
  userOfActivePage: PropTypes.string,
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string,
  globalStateForTestingPurpose: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  setGlobalStateForTestingPurpose: PropTypes.elementType
};

PostPage.defaultProps = {
  userOfActivePage: "",
  setUserOfActivePage: {},
  currentUser: "",
  globalStateForTestingPurpose: [],
  setGlobalStateForTestingPurpose: ""
};

export default PostPage;
