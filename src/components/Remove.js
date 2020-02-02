import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import postingStore from "../stores/postingStore";

function Remove({ posting, setGlobalStateForTestingPurpose, currentUser }) {
  const [removed, setRemoved] = useState(false);

  const checkOwnerShipOfPost = () => {
    return currentUser === posting.userName;
  }

  const RemovePostingFromPostStore = () => {
    return postingStore.removePost(posting.id);
  }


  const removeThis = () => {
    checkOwnerShipOfPost 
      ? (
          RemovePostingFromPostStore;
          setRemoved(true);
          setGlobalStateForTestingPurpose(Date.now());
        )
      : alert("you dont have permission")
    }

  return (
    <>
      <button type="button" onClick={removeThis} id="buttonRemove">
        Remove
      </button>
      {removed && <Redirect to={`/${currentUser}/TimeLine`} />}
    </>
  );
}

Remove.propTypes = {
  currentUser: PropTypes.string,
  posting: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  setGlobalStateForTestingPurpose: PropTypes.elementType
};

Remove.defaultProps = {
  currentUser: "",
  posting: {},
  setGlobalStateForTestingPurpose: {}
};

export default Remove;
