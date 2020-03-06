import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getChangeLike } from "../apis/post";
import { Global, css, jsx } from "@emotion/core";

const Like = ({ posting, setPosting, postingAll }) => {
  const changeLikeOnClick = async () => {
    try {
      const response = await getChangeLike(posting);
      setPosting([response]);
      const index = postingAll.findIndex(it => posting.id === it.id);
      postingAll[index] = response;
      setPosting(postingAll);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <svg
        type="button"
        onClick={changeLikeOnClick}
        id="increaseLikeSvg"
        viewBox="0 0 50 50"
        width="15"
        heigth="15"
        margin-left="5px"
        css={[marginLeft5px]}
      >
        <path
          className="heart"
          d="M 34.3 3.5 C 27.2 3.5 24 8.8 24 8.8 s -3.2 -5.3 -10.3 -5.3 C 6.4 3.5 0.5 9.9 0.5 17.8 s 6.1 12.4 12.2 17.8 c 9.2 8.2 9.8 8.9 11.3 8.9 s 2.1 -0.7 11.3 -8.9 c 6.2 -5.5 12.2 -10 12.2 -17.8 c 0 -7.9 -5.9 -14.3 -13.2 -14.3 Z m -1 29.8 c -5.4 4.8 -8.3 7.5 -9.3 8.1 c -1 -0.7 -4.6 -3.9 -9.3 -8.1 c -5.5 -4.9 -11.2 -9 -11.2 -15.6 c 0 -6.2 4.6 -11.3 10.2 -11.3 c 4.1 0 6.3 2 7.9 4.2 c 3.6 5.1 1.2 5.1 4.8 0 c 1.6 -2.2 3.8 -4.2 7.9 -4.2 c 5.6 0 10.2 5.1 10.2 11.3 c 0 6.7 -5.7 10.8 -11.2 15.6 Z"
        />
      </svg>
      <div css={[margin1]}>
        Like:
        {posting.like.length}
      </div>
    </>
  );
};

const marginLeft5px = css`
  margin-left: 5px;
`;

const margin1 = css`
  margin: -5px 0px 5px 5px;
  font-size: 10px;
`;

// Like.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.exact({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     imageUrl: PropTypes.string,
//     userName: PropTypes.string,
//     like: PropTypes.arrayOf(PropTypes.string)
//   }),
//   postingAll: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   comments: PropTypes.arrayOf(PropTypes.object),
//   setPosting: PropTypes.elementType,
//   addComment: PropTypes.elementType,
//   onChangeComment: PropTypes.elementType,
//   commentAPI: PropTypes.oneOfType([PropTypes.array]),
//   setCommentAPI: PropTypes.elementType
// };

export default Like;
