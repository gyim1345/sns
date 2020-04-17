import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { css } from '@emotion/core';

import { editPostAPI } from '../apis/post';

function Edit({ posting, setPosting, currentUser }) {
  const [input, setInput] = useState([posting.title]);

  const onEdit = e => {
    setInput(e.target.value);
  };

  const onClick = async () => {
    try {
      const response = await editPostAPI(input, posting, currentUser);
      response.Message !== undefined
        ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${response.Message}`
          })
        : setPosting(response);
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
  outline: none;
`;

export default Edit;
