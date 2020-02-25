import Modal from "react-modal";
import React from "react";
import { css } from "@emotion/core";
import ThreeRoundButton from "./threeRoundButton";
import Edit from "./Edit";
import Remove from "./Remove";

function ModalBox({ posting, setPosting, currentUser, input }) {
//   let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ThreeRoundButton setIsOpen={setIsOpen} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <button onClick={closeModal} css={[marginLeft0]}>
          close
        </button>
        <div>
          <Edit
            posting={posting}
            setPosting={setPosting}
            currentUser={currentUser}
            editInput={input}
          />
        </div>
        <Remove posting={posting} currentUser={currentUser} />
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

export default ModalBox;
