import React from "react";
import { css } from "@emotion/core";

function Footer() {
  return (
    <div css={[postPageFooter]}>
      <div css={[footerTexts]}>
        <span css={[footer]}>소개</span>
        <span css={[footer]}>도움말</span>
        <span css={[footer]}>홍보 센터</span>
        <span css={[footer]}>API</span>
        <span css={[footer]}>채용 정보</span>
        <span css={[footer]}>개인정보처리방침</span>
        <span css={[footer]}>약관</span>
        <span css={[footer]}>위치</span>
        <span css={[footer]}>인기 계정</span>
        <span css={[footer]}>추천 계정</span>
        <span css={[footer]}>해시태그</span>
        <span css={[footer]}>언어</span>
      </div>
      <span css={[footerBong]}>© 2020 BONGSTAGRAM</span>
    </div>
  );
}

const footerTexts = css`
  position: relative;
  bottom: 10px;
`;

const footerBong = css`
  justify-content: center;
  display: flex;
  color: #999;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 7px;
  margin-right: 60px;
`;
const footer = css`
  padding-left: 20px;
  min-inline-size: fit-content;
`;
const postPageFooter = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 170px;
`;

export default Footer;
