import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { css } from '@emotion/core';
import Swal from 'sweetalert2';

import { removePostApi } from '../apis/post';

function Remove({
  posting,
  currentUser,
  indexOfCommentOnThisPosting,
  setCommentAPI
}) {
  const [removed, setRemoved] = useState(false);

  const onClick = async () => {
    try {
      const response = await removePostApi(
        posting,
        indexOfCommentOnThisPosting
      );
      if (response.Message !== undefined)
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${response.Message}`
        });
      indexOfCommentOnThisPosting === undefined
        ? setRemoved(response)
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
      <button
        type="button"
        onClick={onClick}
        id="buttonRemove"
        css={[marginLeft0]}
      >
        Remove
      </button>
      {removed && <Redirect to={`/TimeLine/${currentUser}`} />}
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

export default Remove;
