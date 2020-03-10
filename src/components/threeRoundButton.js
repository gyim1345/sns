import React from "react";

function threeRoundButton({ setIsOpen }) {
  const open = () => {
    setIsOpen(true);
  };

  return (
    <svg
      // style={{ marginLeft: "16px" }}
      style={{ marginRight: "16px" }}
      aria-label="옵션 더 보기"
      className="_8-yf5 "
      fill="#262626"
      height="16"
      viewBox="0 0 48 48"
      width="16"
      onClick={open}
    >
      <circle
        clipRule="evenodd"
        cx="8"
        cy="24"
        fillRule="evenodd"
        r="4.5"
      ></circle>
      <circle
        clipRule="evenodd"
        cx="24"
        cy="24"
        fillRule="evenodd"
        r="4.5"
      ></circle>
      <circle
        clipRule="evenodd"
        cx="40"
        cy="24"
        fillRule="evenodd"
        r="4.5"
      ></circle>
    </svg>
  );
}

export default threeRoundButton;
