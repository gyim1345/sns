/* eslint-disable react/prop-types */
import React from "react";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";

function PostPage({ state, setState, user, setUser, globalUser }) {
  const size = "40%";

  return (
    <>
      <UserInfoHead state={state} user={user} />
      <div>
        <Addpost state={state} setState={setState} user={user} globalUser={globalUser}/>
        <PostingList size={size} user={user} setUser={setUser} globalUser={globalUser}/>
      </div>
    </>
  );
}

export default PostPage;
