import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { removePostApi } from "../apis/post";
import PropTypes from "prop-types";
import { Global, css, jsx } from "@emotion/core";

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
        currentUser,
        indexOfCommentOnThisPosting
      );
      if (response.Message !== undefined) return alert(response.Message);
      indexOfCommentOnThisPosting === undefined
        ? setRemoved(response)
        : setCommentAPI(response);
    } catch (e) {
      console.log(e);
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

Remove.propTypes = {
  currentUser: PropTypes.string,
  posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  setCommentAPI: PropTypes.elementType,
  indexOfCommentOnThisPosting: PropTypes.number
};

Remove.defaultProps = {
  currentUser: "",
  posting: {},
  isComment: false
};

export default Remove;
