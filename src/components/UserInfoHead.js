import React from "react";
import PropTypes from "prop-types";
import postingStore from "../stores/postingStore";
import userStore from "../stores/userStore";

function UserInfoHead({ userOfActivePage }) {
  const userFollowerNumber = userStore.getFollowerNumberOfUser(userOfActivePage);

  return (
    <>
      <img
        src={userStore.getUserImage(userOfActivePage)}
        alt="Smiley face"
        height="42"
        width="42"
      />
      &nbsp;&nbsp;&nbsp;
      {userOfActivePage}
      &nbsp;&nbsp;&nbsp;
      <span> 게시물 갯수</span>
      {postingStore.getuserPosts(userOfActivePage).length}
      &nbsp;&nbsp;&nbsp;following 갯수
      {userFollowerNumber}
    </>
  );
}

UserInfoHead.propTypes = {
  userOfActivePage: PropTypes.string
};

UserInfoHead.defaultProps = {
  userOfActivePage: ""
};

export default UserInfoHead;
