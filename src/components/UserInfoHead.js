/* eslint-disable react/prop-types */
import React from "react";
// import PostingList from "../components/PostingList";
import pStore from "../stores/postingStore";
// import Addpost from "../components/Addpost";
import uStore from "../stores/userStore";

function UserInfoHead({ user }) {
  // console.log(uStore.addFollower(user, 'noone'))

  const userFollowerNumber = uStore.getFollowerNumberOfUser(user);
  // console.log(userFollowerNumber);
  // console.log(uStore.getFollowerFromUser(user))

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
