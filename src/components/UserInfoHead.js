/* eslint-disable react/prop-types */
import React from "react";
import pStore from "../stores/postingStore";
import uStore from "../stores/userStore";

function UserInfoHead({ user }) {
  const userFollowerNumber = uStore.getFollowerNumberOfUser(user);

  return (
    <>
      <img
        src="./static/images/profilepicture.png"
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

export default UserInfoHead;
