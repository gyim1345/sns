/* eslint-disable react/prop-types */
import React, { useState } from "react";
import pStore from "../stores/postingStore";
// import uStore from "../stores/userStore";

function AddPost({ setState, user }) {
  const [input, setInput] = useState("");
  // const userInformation = uStore.getFollowerFromUser(user);
  // console.log(userInformation);
  // const userFollowerNumber = uStore.getFollowerNumberOfUser(user);
  // console.log(userFollowerNumber);

  const onChange = e => {
    setInput(e.target.value);
  };

  const addPost = () => {
    pStore.createPost(input, user);

    setState(Date.now());
    setInput("");
  };

  // const onFileChange = (event) => {
  //   if (event.target.files != null && event.target.files.length > 0) {
  //     setFileName(event.target.files[0].name);
  //     setImage(event.target.files[0]);

  //   }
  // };

  return (
    <>
      <input value={input} onChange={onChange} />
      <button type="button" onClick={addPost} id="buttonAdd">
        Add
      </button>

      {/* <div className="form-group form-picture">
          <div className="file-box">
              <input className="upload-name" value={fileName} disabled />
              <label htmlFor="ex_filename" className="btn btn-secondary">업로드</label>
              <input type="file" id="ex_filename" className="upload-hidden" onChange={onFileChange}/>
            </div>
          </div> */}
    </>
  );
}

export default AddPost;
