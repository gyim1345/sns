import React, { useState } from "react";
import PropTypes from "prop-types";
import pStore from "../stores/postingStore";
import cStore from "../stores/commentStore";
import Posting from "./Posting";
import uStore from "../stores/userStore";

function PostingList({
  postingDetail,
  size,
  user,
  follower,
  setUser,
  globalUser
}) {
  let postings =
    postingDetail === undefined
      ? pStore.postList.filter(post => post.userName === user)
      : [postingDetail];
  const { comments } = cStore;

  if (follower !== undefined) {
    const temppostings = [];
    follower.forEach(person => temppostings.push(pStore.getuserPosts(person)));
    const [temp] = temppostings;
    postings = pStore.postList.filter(post => post.userName === user);
    postings.push(...temp);
  }

  const [inputa, setInputa] = useState("");
  const [state, setState] = useState([]);

  const onChangeComment = e => {
    setInputa(e.target.value);
  };

  const addComment = (_, postId) => {
    cStore.createComment(postId, inputa, globalUser);
    setState(Date.now());
  };

  return (
    <>
      <div>
        {postings.map(posting => (
          <ul key={posting.id}>
            <Posting
              posting={posting}
              comments={comments}
              state={state}
              setState={setState}
              addComment={addComment}
              onChangeComment={onChangeComment}
              size={size}
              user={user}
              setUser={setUser}
              globalUser={globalUser}
            />
          </ul>
        ))}
      </div>
    </>
  );
}

PostingList.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func,
  globalUser: PropTypes.string,
  size: PropTypes.string,
  postingDetail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  follower: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

PostingList.defaultProps = {
  user: "",
  setUser: "",
  globalUser: "",
  size: 0,
  postingDetail: {},
  follower: [""]
};

export default PostingList;
