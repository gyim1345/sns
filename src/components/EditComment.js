import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { editCommentAPI } from '../apis/comment';

function EditComment({
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
      const response = await editCommentAPI(
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
      <input type="text" value={input} onChange={e => onEdit(e)} />
      <button type="button" onClick={onClick} id="buttonEdit">
        Edit
      </button>
    </>
  );
}

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
