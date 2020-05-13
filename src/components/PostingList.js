import React, { useState } from 'react';
import { css } from '@emotion/core';
import Swal from 'sweetalert2';

import Posting from './Posting';
import { addCommentForPost } from '../apis/comment';

function PostingList({
  posting,
  setPosting,
  sizeOfPicture,
  userOfActivePage,
  setUserOfActivePage,
  currentUser,
  commentAPI,
  setCommentAPI
}) {
  const [Input, setInput] = useState('');
  // const { comments } = commentStorage;

  const onChangeComment = e => {
    setInput(e.target.value);
  };

  const addComment = async (_, postId, Input, username, index, commentId) => {
    try {
      const response = await addCommentForPost(
        postId,
        Input,
        currentUser,
        index,
        commentId
      );
      setCommentAPI(response);
      setInput('');
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Internal Error'
      });
    }
  };

  return (
    <>
      <div css={[wrap]}>
        {posting !== undefined &&
          posting
            .sort((a, b) => b.id - a.id)
            .map(posting1 => (
              <ul
                key={posting1.id}
                style={{ marginTop: '90px', marginBottom: '-20px' }}
              >
                <Posting
                  posting={posting1}
                  postingAll={posting}
                  setPosting={setPosting}
                  // comments={comments}
                  addComment={addComment}
                  onChangeComment={onChangeComment}
                  sizeOfPicture={sizeOfPicture}
                  userOfActivePage={userOfActivePage}
                  setUserOfActivePage={setUserOfActivePage}
                  currentUser={currentUser}
                  commentAPI={commentAPI}
                  setCommentAPI={setCommentAPI}
                  setInput={Input}
                />
              </ul>
            ))}
      </div>
    </>
  );
}

const wrap = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 100px;
`;

// PostingList.propTypes = {
//   userOfActivePage: PropTypes.string,
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string,
//   sizeOfPicture: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   setPosting: PropTypes.elementType,
//   postingDetail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   commentAPI: PropTypes.oneOfType([PropTypes.array]),
//   setCommentAPI: PropTypes.elementType
// };

// PostingList.defaultProps = {
//   userOfActivePage: "",
//   setUserOfActivePage: "",
//   currentUser: "",
//   sizeOfPicture: 0,
//   postingDetail: undefined,
//   follower: [""]
// };

export default PostingList;
