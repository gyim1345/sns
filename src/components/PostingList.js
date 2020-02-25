import React, { useState } from "react";
import PropTypes from "prop-types";
import commentStorage from "../stores/commentStore";
import Posting from "./Posting";
import { addCommentForPost } from "../apis/comment";
import { Global, css, jsx } from "@emotion/core";

function PostingList({
  posting,
  setPosting,
  sizeOfPicture,
  userOfActivePage,
  setUserOfActivePage,
  currentUser,
  commentAPI,
  setCommentAPI
}) {
  const [Input, setInput] = useState("");
  const { comments } = commentStorage;

  const onChangeComment = e => {
    setInput(e.target.value);
  };

  const addComment = async (
    _,
    postId,
    Input,
    currentUser,
    indexOfCommentOnThisPosting,
    commentId
  ) => {
    try {
      console.log(   postId,
        Input,
        currentUser,
        indexOfCommentOnThisPosting )
      const response = await addCommentForPost(
        postId,
        Input,
        currentUser,
        indexOfCommentOnThisPosting,
        commentId
      );
      setCommentAPI(response);
      setInput("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div css={[wrap]}>
        {posting !== undefined &&
          posting.map(posting1 => (
            <ul key={posting1.id}>
              <Posting
                posting={posting1}
                postingAll={posting}
                setPosting={setPosting}
                comments={comments}
                addComment={addComment}
                onChangeComment={onChangeComment}
                sizeOfPicture={sizeOfPicture}
                userOfActivePage={userOfActivePage}
                setUserOfActivePage={setUserOfActivePage}
                currentUser={currentUser}
                commentAPI={commentAPI}
                setCommentAPI={setCommentAPI}
                setInput={Input}
              />
            </ul>
          ))}
      </div>
    </>
  );
}

const wrap = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

PostingList.propTypes = {
  userOfActivePage: PropTypes.string,
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string,
  sizeOfPicture: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  setPosting: PropTypes.elementType,
  postingDetail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  commentAPI: PropTypes.oneOfType([PropTypes.array]),
  setCommentAPI: PropTypes.elementType
};

PostingList.defaultProps = {
  userOfActivePage: "",
  setUserOfActivePage: "",
  currentUser: "",
  sizeOfPicture: 0,
  postingDetail: undefined,
  follower: [""]
};

export default PostingList;
