import Modal from "react-modal";
import React from "react";
import { css } from "@emotion/core";
import ThreeRoundButton from "./threeRoundButton";
import Edit from "./Edit";
import Remove from "./Remove";
import ModalAddPost from "./ModalAddpost";
import FileUpload from "./FileUpload";

function ModalBoxAdd({ posting, setPosting, currentUser, input }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button onClick={openModal} css={[marginLeft0]}>
        AddBong
      </button>
      {/* <ThreeRoundButton setIsOpen={setIsOpen} /> */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <button onClick={closeModal} css={[marginLeft0]}>
          close
        </button>
        {/* <ModalAddPost currentUser={currentUser} /> */}
        <FileUpload />
      </Modal>
    </>
  );
}

const modalCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 12px;
  outline: none;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column-reverse;
`;

const marginLeft0 = css`
  margin-left: 0px;
`;

export default ModalBoxAdd;
