import React, { useState } from 'react';
import { css } from '@emotion/core';

function Reply({
  posting,
  currentUser,
  indexOfCommentOnThisPosting,
  addComment,
  commentAPI,
  closeModal
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
    closeModal();
  };

  return (
    <>
      <textarea
        type="text"
        value={input}
        onChange={e => onChange(e)}
        css={[textAreaCss]}
      />
      <div css={[innerButtonBoxCss]}>
        <div css={innerColumnButtonBoxCss}>
          <button type="button" onClick={addReply} css={[buttonSave]}>
            Add Reply
          </button>
          {/* <AccountSetting info={info} userInfo={userInfo} /> */}
          <button
            onClick={closeModal}
            css={[buttonCancel]}
            style={{ margin: 0 }}
          >
            close
          </button>
        </div>
      </div>
      {/* <input value={input} onChange={onChange} css={[replyCss]} />
      <button type="button" onClick={addReply} id="buttonReply">
        AddReply
      </button> */}
    </>
  );
}

const textAreaCss = css`
  border: none;
  margin-top: 10px;
  font-size: 20px;
  outline: none;
  height: 100px;
  width: 500px;
  padding-left: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;

const button = css`
  background-color: transparent;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  font-size: 18px;
  border-radius: 50%;
  border-radius: 3px;
`;

const buttonSave = css`
  ${button}
  background-color: #0275d8;
  color: white;
  margin-right: 10px;
`;

const buttonCancel = css`
  ${button}
  color: #0275d8;
  background-color: white;
`;

const modalCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 12px;
  outline: none;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const innerColumnButtonBoxCss = css`
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const innerButtonBoxCss = css`
  display: FLEX;
  background: white;
  width: 506px;
  justify-content: flex-end;
`;

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
