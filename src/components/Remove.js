import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { css } from '@emotion/core';
import Swal from 'sweetalert2';

import { removePostApi } from '../apis/post';

function Remove({ posting, setPosting, postingAll }) {
  const onClick = async () => {
    try {
      const response = await removePostApi(posting);
      if (response.Message !== undefined)
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${response.Message}`
        });
      setPosting(postingAll.filter(x => x !== posting));
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
        css={[buttonCss]}
      >
        Remove
      </button>
    </>
  );
}

const buttonCss = css`
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  background-color: white;
  width: 300px;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
`;

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

export default Remove;
