import React from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";

function PostPage({ state, setState, user, setUser, globalUser }) {
  const size = "40%";

  return (
    <>
      <UserInfoHead state={state} user={user} />
      <div>
        <Addpost
          state={state}
          setState={setState}
          user={user}
          globalUser={globalUser}
        />
        <PostingList
          size={size}
          user={user}
          setUser={setUser}
          globalUser={globalUser}
        />
      </div>
    </>
  );
}

PostPage.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func,
  globalUser: PropTypes.string,
  state: PropTypes.arrayOf(PropTypes.number),
  setState: PropTypes.elementType
};

PostPage.defaultProps = {
  user: "",
  setUser: {},
  globalUser: "",
  state: [],
  setState: ""
};

export default PostPage;
