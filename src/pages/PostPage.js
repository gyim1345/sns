/* eslint-disable react/prop-types */
import React from "react";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";

function PostPage({ state, setState, user }) {
  const size = "40%";

  return (
    <>
      <UserInfoHead state={state} user={user} />
      <div>
        <Addpost state={state} setState={setState} user={user} />
        <PostingList size={size} user={user} />
      </div>
    </>
  );
}

export default PostPage;
