import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { css } from '@emotion/core';

import { editPostAPI } from '../apis/post';

function Edit({
  posting,
  setPosting,
  indexOfCommentOnThisPosting,
  currentUser,
  setCommentAPI
}) {
  const thisPost = posting[indexOfCommentOnThisPosting] || posting;
  const [input, setInput] = useState([thisPost.title]);

  const onEdit = e => {
    setInput(e.target.value);
  };

  const onClick = async () => {
    try {
      const response = await editPostAPI(
        input,
        posting,
        currentUser,
        indexOfCommentOnThisPosting
      );
      response.Message !== undefined
        ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${response.Message}`
          })
        : indexOfCommentOnThisPosting === undefined
        ? setPosting(response)
        : setCommentAPI(response);
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
      <input
        type="text"
        value={input}
        onChange={e => onEdit(e)}
        css={[boxHidden]}
      />
      <button type="button" onClick={onClick} id="buttonEdit">
        Edit
      </button>
    </>
  );
}

const boxHidden = css`
  border-style: hidden;
  padding-left: 12px;
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

export default Edit;
