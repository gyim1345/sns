import React, { useState } from 'react';
import { css } from '@emotion/core';


function Reply({
  posting,
  currentUser,
  indexOfCommentOnThisPosting,
  addComment,
  commentAPI
}) {
  const [input, setInput] = useState('');

  const onChange = e => {
    setInput(e.target.value);
  };

  const addReplyToComment = () => {
    return addComment(
      null,
      posting.postLId,
      `@${posting.userName.substring(
        0,
        posting.userName.indexOf('@')
      )} ${input}`,
      currentUser,
      commentAPI[indexOfCommentOnThisPosting].id,
      posting.id
    );
  };

  const addReply = () => {
    addReplyToComment();
  };

  return (
    <>
      <input value={input} onChange={onChange} css={[replyCss]}/>
      <button type="button" onClick={addReply} id="buttonReply">
        AddReply
      </button>
    </>
  );
}

const replyCss = css`
border: none;
outline: none;
`;

// Reply.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   addComment: PropTypes.elementType,
//   commentAPI: PropTypes.oneOfType([PropTypes.array]),
//   indexOfCommentOnThisPosting: PropTypes.number
// };
export default Reply;
