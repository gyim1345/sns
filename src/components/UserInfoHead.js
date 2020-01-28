import React from "react";
import PropTypes from "prop-types";
import pStore from "../stores/postingStore";
import uStore from "../stores/userStore";

function UserInfoHead({ user }) {
  const userFollowerNumber = uStore.getFollowerNumberOfUser(user);

  return (
    <>
      <img
        src={uStore.getUserImage(user)}
        alt="Smiley face"
        height="42"
        width="42"
      />
      &nbsp;&nbsp;&nbsp;
      {user}
      &nbsp;&nbsp;&nbsp;
      <span> 게시물 갯수</span>
      {pStore.getuserPosts(user).length}
      &nbsp;&nbsp;&nbsp;following 갯수
      {userFollowerNumber}
    </>
  );
}

UserInfoHead.propTypes = {
  user: PropTypes.string
};

UserInfoHead.defaultProps = {
  user: ""
};

export default UserInfoHead;
