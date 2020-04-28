import React, { useState } from 'react';
import { css } from '@emotion/core';
import Swal from 'sweetalert2';

import { removeCommentApi } from '../apis/comment';

function RemoveComment({
  posting,
  indexOfCommentOnThisPosting,
  setCommentAPI
}) {
  const onClick = async () => {
    try {
      const response = await removeCommentApi(
        posting,
        indexOfCommentOnThisPosting
      );
      if (response.Message !== undefined)
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${response.Message}`
        });

      setCommentAPI(response);
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
      <button
        type="button"
        onClick={onClick}
        id="buttonRemove"
        css={[removeButtonCss]}
      >
        Remove
      </button>
    </>
  );
}

const removeButtonCss = css`
border: 1px solid rgba(var(--d0b,219,219,219),1);
color: rgba(var(--f07,38,38,38),1);
background-color: white;
width: 300px;
height: 48px;
font-size: 14px;
font-weight: bold;
`;

// Remove.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   setCommentAPI: PropTypes.elementType,
//   indexOfCommentOnThisPosting: PropTypes.number
// };

// Remove.defaultProps = {
//   currentUser: "",
//   posting: {},
//   isComment: false
// };

export default RemoveComment;
