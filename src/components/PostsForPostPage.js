import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, Route, Switch, Redirect, Router } from "react-router-dom";
import { css } from "@emotion/core";
import PostGridSvg from "../svgIcons/PostGridSvg";
import TvSvg from "../svgIcons/TvSvg";
import TagSvg from "../svgIcons/TagSvg";
import PostImagesOnly from "./PostImagesOnly";
import Footer from "../components/Footer";

function PostsForSearchPage({ posting, setUserOfActivePage, currentUser }) {
  const [chosen, setChosen] = useState(1);
  const { user } = useParams();
  console.log(user);

  const changeUser = () => {
    setUserOfActivePage(posting.userName);
  };

  // const onClicka = number => {
  //   console.log(number);
  //   setChosen(number);
  // };

  console.log(chosen);

  return (
    <>
      <div css={[tabs]}>
        <Link
          to={`/profile/${user}`}
          // css={chosen === 1 ? dayActive : tabWord}
          css={[tabWord]}
        >
          <PostGridSvg />
          <span>게시물</span>
        </Link>
        <Link to={`/profile/${user}/tv`} css={[tabWord]}>
          <TvSvg />
          티비
        </Link>
        <Link to={`/profile/${user}/tag`} css={[tabWord]}>
          <TagSvg />
          태그됨
        </Link>
      </div>
      <Route exact path={`/profile/${user}`}>
        <div css={[searchPagePostsCss]}>
          {posting.map((post, i) => (
            <div key={`postPage${i}`}>
              <Link
                to={`/${post.userName}/posting/${post.id}`}
                // onClick={changeUser}
              >
                <PostImagesOnly imageUrl={post.imageUrl} />
              </Link>
            </div>
          ))}
        </div>
      </Route>
      <Route exact path={`/profile/${user}/tv`}>
        <div css={[tabTv]}>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
          <span>tvtv</span>
        </div>
      </Route>
      <Route exact path={`/profile/:user/tag`}>
        <div css={[tabTag]}>tag</div>
      </Route>

      <Footer />
    </>
  );
}

const tabTag = css`
  min-height: 500px;
`;

const tabTv = css`
  min-height: 500px;
`;

const dayActive = css`
  font-size: 500px;
`;

const tabWord = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  text-decoration: none;
  color: rgba(var(--f52, 153, 153, 153), 1);
  margin-left: 25px;
  margin-right: 25px;
  padding: 16px 0px;
  font-size: 16px;
`;

const tabs = css`
  justify-content: center;
  letter-spacing: 1px;
  width: 79%;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  border-top: 1px solid rgba(var(--b38, 219, 219, 219), 1);
  -webkit-box-align: center;
  -webkit-align-items: center;
`;

const searchPagePostsCss = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 33%;
  justify-content: center;
`;

export default PostsForSearchPage;
