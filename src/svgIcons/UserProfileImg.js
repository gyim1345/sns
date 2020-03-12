import React from "react";
import { css } from "@emotion/core";

function UserProfileImg() {
  return (
    <img
      css={[imgCss]}
      src={"static/images/user1.png"}
      alt=""
      width={28}
      height={28}
    />
  );
}

const imgCss = css`
  border-radius: 50%;
  position: relative;
  top: -3px;
`;

export default UserProfileImg;
