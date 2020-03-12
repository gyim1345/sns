import React from "react";
import { getChangeLike } from "../apis/post";
import { css } from "@emotion/core";
import LikeSvg from "../svgIcons/LikeSvg";

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
    <div>
      <div onClick={changeLikeOnClick} css={[likeDiv]}></div>
      <LikeSvg />
      <div css={[margin1]}>
        좋아요 &nbsp;
        {posting.like.length}개
      </div>
    </div>
  );
};

const likeDiv = css`
  left: 16px;
  padding: 10px 12px 11px 12px;
  position: absolute;
`;

const margin1 = css`
  position: absolute;
  margin: -2px 0px 5px 16px;
  font-size: 14px;
  font-weight: bold;
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
