/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import pStore from "../stores/postingStore";

function Remove({ stateP, state, setState, user, globalUser }) {
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

export default Remove;
