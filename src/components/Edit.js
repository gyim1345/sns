/* eslint-disable react/prop-types */
import React, { useState } from "react";
import pStore from "../stores/postingStore";
import cStore from "../stores/commentStore";

function Edit({ stateP, setState, cid, indexC, user, globalUser }) {
  const [edit, setEdit] = useState([""]);
  const input = [];

  const editThis = () => {
    if (stateP.userName !== globalUser) alert("you dont have permission");
    else if (pStore.getPost(stateP.id) === stateP && stateP.userName === globalUser) {
      pStore.getPost(stateP.id).title = edit[stateP.id];
    } else if (
      cStore.getComment(indexC + 1) === stateP[cid] &&
      cStore.getComment(indexC + 1).userWritten === globalUser
    ) {
      cStore.getComment(indexC + 1).title = edit[stateP.id];
    } else alert("you dont have permission");
    setState(Date.now());
  };

  const onEdit = (e, Id) => {
    edit[Id] = e.target.value;
    setEdit(edit);
  };

  return (
    <>
      <input
        type="text"
        value={input[stateP.id]}
        onChange={e => onEdit(e, stateP.id)}
      />
      <button type="button" onClick={editThis} id="buttonEdit">
        Edit
      </button>
    </>
  );
}

export default Edit;
