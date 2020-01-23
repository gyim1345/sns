import React from "react";
import PostingList from "../components/PostingList";
import uStore from "../stores/userStore";

function TimeLinePage({ state, setState, user }) {
  const follower = uStore.getFollowerFromUser(user);
  const size = "40%";
  return (
    <>
      <div>
        <PostingList size={size} user={user} follower={follower} />
      </div>
    </>
  );
}

export default TimeLinePage;
