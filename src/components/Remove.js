import React from "react";
import PropTypes from "prop-types";
import pStore from "../stores/postingStore";

function Remove({ stateP, setState, globalUser }) {
  const removeThis = () => {
    if (globalUser === stateP.userName) {
      pStore.removePost(stateP.id);
      setState(Date.now());
    } else alert("you dont have permission");
  };

  return (
    <>
      <button type="button" onClick={removeThis} id="buttonRemove">
        Remove
      </button>
    </>
  );
}

Remove.propTypes = {
  globalUser: PropTypes.string,
  stateP: PropTypes.object,
  setState: PropTypes.elementType
};

Remove.defaultProps = {
  globalUser: "",
  stateP: {},
  setState: {}
};

export default Remove;
