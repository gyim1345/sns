import React from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import uStore from "../stores/userStore";

function TimeLinePage({ setUser, globalUser }) {
  const follower = uStore.getFollowerFromUser(globalUser);
  const size = "40%";
  return (
    <>
      <div>
        <PostingList
          size={size}
          user={globalUser}
          follower={follower}
          setUser={setUser}
          globalUser={globalUser}
        />
      </div>
    </>
  );
}

TimeLinePage.propTypes = {
  setUser: PropTypes.string,
  globalUser: PropTypes.string
};

TimeLinePage.defaultProps = {
  setUser: "",
  globalUser: ""
};

export default TimeLinePage;
