import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { css } from '@emotion/core';

import { editCommentAPI } from '../apis/comment';
import ModalBoxEditComment from './ModalBoxEditComment';

function EditComment({
  posting,
  setPosting,
  indexOfCommentOnThisPosting,
  currentUser,
  setCommentAPI,
  setIsOpen
}) {
  const [clicked, setClicked] = useState(false);

  const onClick = async () => {
    setClicked(true);
  };

  return (
    <>
      {clicked && (
        <ModalBoxEditComment
          clicked={clicked}
          posting={posting}
          setPosting={setPosting}
          currentUser={currentUser}
          setIsOpenModalBox={setIsOpen}
          setCommentAPI={setCommentAPI}
          indexOfCommentOnThisPosting={indexOfCommentOnThisPosting}
        />
      )}
      <button
        type="button"
        onClick={onClick}
        id="buttonEdit"
        css={editButtonCss}
      >
        Edit
      </button>
    </>
  );
}

const editButtonCss = css`
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  background-color: white;
  width: 300px;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
`;

// Edit.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   setPosting: PropTypes.elementType,
//   indexOfCommentOnThisPosting: PropTypes.number,
//   setCommentAPI: PropTypes.elementType
// };

// Edit.defaultProps = {
//   currentUser: "",
//   posting: {},
//   indexOfComment: undefined,
//   cid: undefined
// };

export default EditComment;
