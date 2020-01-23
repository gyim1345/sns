/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import pStore from "../stores/postingStore";

function Remove({ stateP, state, setState }) {
  const removeThis = () => {
    pStore.removePost(stateP.id);
    setState(Date.now());
  };

  return (
    <>
      <button type="button" onClick={removeThis} id="buttonRemove">
        Remove
      </button>
    </>
  );
}

export default Remove;
