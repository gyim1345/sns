import React from "react";
import { css } from "@emotion/core";

function LikeFilledSvg() {
  return (
    <>
      <svg
        style={{ marginLeft: "16px", marginBottom: "5px", marginRight: "15px" }}
        type="button"
        id="increaseLikeFilledSvg"
        viewBox="0 0 50 50"
        width="24"
        heigth="24"
        fill="#ed4956"
       >
        {/* <path
          className="heart"
          d="M 34.3 3.5 C 27.2 3.5 24 8.8 24 8.8 s -3.2 -5.3 -10.3 -5.3 C 6.4 3.5 0.5 9.9 0.5 17.8 s 6.1 12.4 12.2 17.8 c 9.2 8.2 9.8 8.9 11.3 8.9 s 2.1 -0.7 11.3 -8.9 c 6.2 -5.5 12.2 -10 12.2 -17.8 c 0 -7.9 -5.9 -14.3 -13.2 -14.3 Z m -1 29.8 c -5.4 4.8 -8.3 7.5 -9.3 8.1 c -1 -0.7 -4.6 -3.9 -9.3 -8.1 c -5.5 -4.9 -11.2 -9 -11.2 -15.6 c 0 -6.2 4.6 -11.3 10.2 -11.3 c 4.1 0 6.3 2 7.9 4.2 c 3.6 5.1 1.2 5.1 4.8 0 c 1.6 -2.2 3.8 -4.2 7.9 -4.2 c 5.6 0 10.2 5.1 10.2 11.3 c 0 6.7 -5.7 10.8 -11.2 15.6 Z"
        /> */}
        <path
          className="heart"
          d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z
          "
        />
      </svg>
    </>
  );
}

const Red = css`
  fill="#ed4956"
`

export default LikeFilledSvg;

