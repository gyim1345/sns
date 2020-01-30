import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import pStore from "../stores/postingStore";

function Remove({ stateP, setState, globalUser }) {
  const [removed, setRemoved] = useState(false);

  const removeThis = () => {
    if (globalUser === stateP.userName) {
      pStore.removePost(stateP.id);
      setRemoved(true);
      setState(Date.now());
    } else alert("you dont have permission");
  };

  return (
    <>
      <button type="button" onClick={removeThis} id="buttonRemove">
        Remove
      </button>
      {removed && <Redirect to={`/${globalUser}/TimeLine`} />}
    </>
  );
}

Remove.propTypes = {
  globalUser: PropTypes.string,
  stateP: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  setState: PropTypes.elementType
};

Remove.defaultProps = {
  globalUser: "",
  stateP: {},
  setState: {}
};

export default Remove;
