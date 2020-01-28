import React, { useState } from "react";
import PropTypes from "prop-types";
import pStore from "../stores/postingStore";
import cStore from "../stores/commentStore";

function Edit({ stateP, setState, cid, indexC, globalUser }) {
  const [edit, setEdit] = useState([""]);
  const input = [];

  const editThis = () => {
    if (stateP.userName !== globalUser) alert("you dont have permission");
    else if (
      pStore.getPost(stateP.id) === stateP &&
      stateP.userName === globalUser
    ) {
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

Edit.propTypes = {
  globalUser: PropTypes.string,
  stateP: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    userName: PropTypes.string,
    like: PropTypes.arrayOf(PropTypes.string)
  }),
  setState: PropTypes.elementType,
  indexC: PropTypes.string,
  cid: PropTypes.string
};

Edit.defaultProps = {
  globalUser: "",
  stateP: [],
  setState: 0,
  indexC: "",
  cid: ""
};

export default Edit;
