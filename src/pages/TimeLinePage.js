import React from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import userStorage from "../stores/userStore";
import postingStorage from "../stores/postingStore";

function TimeLinePage({ setUserOfActivePage, currentUser }) {

  const sizeOfPicture = "40%";
  let follower = [];

  const checkCurrentUserDataPresent = () => {
    return currentUser !== undefined;
  }

  const getFollowerForCurrentUser = () => {
    return follower = userStorage.getFollowerFromUser(currentUser);
  }

  const setFollowerIsEmpty =() => {
    return follower = [];
  }

  checkCurrentUserDataPresent() ? getFollowerForCurrentUser() : setFollowerIsEmpty();

  return (
    <>
      {postingStorage.getuserPosts(currentUser)[0] === undefined ? (
        <li>Go to Your user home and add some stuff RIGHT NOW!</li>
      ) : (
        <div>
          <PostingList
            sizeOfPicture={sizeOfPicture}
            userOfActivePage={currentUser}
            follower={follower}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </div>
      )}
    </>
  );
}

TimeLinePage.propTypes = {
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string
};

TimeLinePage.defaultProps = {
  setUserOfActivePage: "",
  currentUser: ""
};

export default TimeLinePage;
