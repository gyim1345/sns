import React from 'react';
import { css } from '@emotion/core';

function UserProfileImg({ userImage }) {
  return <img css={[imgCss]} src={userImage} alt="" width={28} height={28} />;
}

const imgCss = css`
  border-radius: 50%;
  position: relative;
  top: -3px;
`;

export default UserProfileImg;
