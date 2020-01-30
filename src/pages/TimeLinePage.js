import React from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import uStore from "../stores/userStore";
import pStore from "../stores/postingStore";

function TimeLinePage({ setUser, globalUser }) {
  let follower = [];
  if (globalUser !== undefined) {
    follower = uStore.getFollowerFromUser(globalUser);
  } else follower = [];
  const size = "40%";
  return (
    <>
      {pStore.getuserPosts(globalUser)[0] === undefined ? (
        <li>Go to Your user home and add some stuff RIGHT NOW!</li>
      ) : (
        <div>
          <PostingList
            size={size}
            user={globalUser}
            follower={follower}
            setUser={setUser}
            globalUser={globalUser}
          />
        </div>
      )}
    </>
  );
}

TimeLinePage.propTypes = {
  setUser: PropTypes.func,
  globalUser: PropTypes.string
};

TimeLinePage.defaultProps = {
  setUser: "",
  globalUser: ""
};

export default TimeLinePage;
