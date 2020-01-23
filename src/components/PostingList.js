/* eslint-disable react/prop-types */
import React, { useState } from "react";
import pStore from "../stores/postingStore";
import cStore from "../stores/commentStore";
import Posting from "./Posting";
import Test from "./Test";

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

  // const [input, setInput] = useState([]);
  const [inputa, setInputa] = useState("");
  const [state, setState] = useState([]);
  // const [input, setInput] = useState('');
  // const [fileName, setFileName] = useState('이미지 파일 선택');

  const onChangeComment = e => {
    setInputa(e.target.value);
  };

  const addComment = (_, postId) => {
    const commentLength = cStore.commentsLength;
    cStore.createComment(postId, inputa);
    setState(commentLength);
  };

  // const addLineBreaks = (string) => string.split('\n').map((text, index) => (
  //   <React.Fragment key={`${text}-${index}`}>
  //     {text}
  //     <br />
  //   </React.Fragment>
  // ));

  return (
    <>
      <div>
        {postings.map(posting => (
          <ul key={posting.id}>
            {/* {addLineBreaks(posting.id.toString())} */}
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
            {/* <Switch>
              <Route exact path={`/posting/${posting.id}`}>
                <Test />
              </Route>
            </Switch> */}
          </ul>
        ))}
      </div>
    </>
  );
}

export default PostingList;
