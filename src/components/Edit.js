import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { css } from '@emotion/core';

import { editPostAPI } from '../apis/post';
import ModalBoxEdit from './ModalBoxEdit';

function Edit({ posting, setPosting, currentUser, setIsOpenModalBox, postingAll }) {
  const [clicked, setClicked] = useState(false);

  const onClick = async () => {
    setClicked(true);
  };

  return (
    <>
      {clicked && (
        <ModalBoxEdit
          clicked={clicked}
          posting={posting}
          setPosting={setPosting}
          currentUser={currentUser}
          setIsOpenModalBox={setIsOpenModalBox}
          postingAll={postingAll}
        />
      )}
      <button type="button" onClick={onClick} id="buttonEdit" css={buttonCss}>
        Edit
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

const boxHidden = css`
  border-style: hidden;
  padding-left: 12px;
  outline: none;
`;

export default Edit;
