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
        css={[marginLeft0]}
      >
        Remove
      </button>
    </>
  );
}

const marginLeft0 = css`
  margin-left: 0px;
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
