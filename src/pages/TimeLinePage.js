import React from "react";
import PostingList from "../components/PostingList";
import uStore from "../stores/userStore";

function TimeLinePage({ user, setUser, globalUser }) {
  const follower = uStore.getFollowerFromUser(globalUser);
  const size = "40%";
  return (
    <>
      <div>
        <PostingList size={size} user={globalUser} follower={follower} setUser={setUser} globalUser={globalUser}/>
      </div>
    </>
  );
}

export default TimeLinePage;
