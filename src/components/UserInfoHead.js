import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getUserInfoAPI } from "../apis/post";
import { Global, css, jsx } from "@emotion/core";

function UserInfoHead({ user, info, setInfo, posting }) {
  const userInfo = async () => {
    try {
      const response = await getUserInfoAPI(user);
      setInfo(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userInfo();
  }, [posting]);

  return (
    <>
      <div css={[gridBoxForUserHead]}>
        <img
          src={info.image}
          alt="Smiley face"
          height="100"
          width="100"
          css={[borderRadius]}
        />
        <span css={[location23]}> {info.user} </span>
        <span css={[location33]}> 게시물 갯수 {info.postNumber}</span>
        <span css={[location43]}>following 갯수 {info.followerNumber}</span>
      </div>
    </>
  );
}

const gridBoxForUserHead = css`
  display: grid;
  grid-template: 20% 20% 20% 20% / 20% 20%20%20%;
`;

const borderRadius = css`
  border-radius: 50%;
  grid-column-start: 2;
`;

const location33 = css`
  grid-row-start: 3;
  grid-column-start: 3;
`;

const location23 = css`
  grid-row-start: 1;
  grid-column-start: 3;
  font-size: xx-large;
`;

const location43 = css`
  grid-row-start: 3;
  grid-column-start: 4;
`;

UserInfoHead.propTypes = {
  userOfActivePage: PropTypes.string
};

UserInfoHead.defaultProps = {
  userOfActivePage: ""
};

export default UserInfoHead;
