import React, { Fragment, useState } from "react";
import Message from "./Message";
import axios from "axios";
import { css } from "@emotion/core";

const FileUpload = ({ currentUser, posting, setPosting }) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [message, setMessage] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [input, setInput] = useState("");
  const [inputTag, setInputTag] = useState("");
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImgURL(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onChangeInput = e => {
    setInput(e.target.value);
  };

  const onChangeTagInput = e => {
    setInputTag(e.target.value);
  };

  const onChange = e => {
    onImageChange(e);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  console.log(file);

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("input", input);
    formData.append("inputTag", inputTag);
    formData.append("user", currentUser);

    try {
      console.log(formData);
      const { data } = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      setPosting([...posting, data.posts]);
      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };


  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
        </div>

        {imgURL !== "" && (
          <img
            id="target"
            src={imgURL}
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        )}
        <div css={[inputInputTagUpload]}>
          <input type="text" onChange={onChangeInput} placeholder="Title" />
          <input type="text" onChange={onChangeTagInput} placeholder="Tag" />
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </div>
      </form>
    </Fragment>
  );
};

const inputInputTagUpload = css`
  display: flex;
  text-align-last: center;
  flex-direction: column;
`;

export default FileUpload;
