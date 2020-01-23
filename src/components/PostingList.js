/* eslint-disable react/prop-types */
import React, { useState } from "react";
import pStore from "../stores/postingStore";
import cStore from "../stores/commentStore";
import Posting from "./Posting";

function PostingList({ postingDetail, size, user, follower }) {
  let postings =
    postingDetail === undefined
      ? pStore.postList.filter(post => post.userName === user)
      : [postingDetail];
  const { comments } = cStore;

  if (follower !== undefined) {
    const temppostings = [];
    follower.forEach(person => temppostings.push(pStore.getuserPosts(person)))
    const [temp] = temppostings;
    postings = pStore.postList.filter(post => post.userName === user)
    postings.push(...temp);
  }

  const [inputa, setInputa] = useState("");
  const [state, setState] = useState([]);

  const onChangeComment = e => {
    setInputa(e.target.value);
  };

  const addComment = (_, postId) => {
    const commentLength = cStore.commentsLength;
    cStore.createComment(postId, inputa);
    setState(commentLength);
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
            />
          </ul>
        ))}
      </div>
    </>
  );
}

export default PostingList;
