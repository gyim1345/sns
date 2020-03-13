import React, { useState, useEffect } from "react";
import { scrappedPosts } from "../apis/post";
import { Link } from "react-router-dom";
import PostImagesOnly from "./PostImagesOnly";
import { css } from "@emotion/core";

function ScrappedPosts({ user }) {
  const [posts, setPosts] = useState([]);

  const ScrappedPosts = async () => {
    try {
      const response = await scrappedPosts(user);
      setPosts(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    ScrappedPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <div css={[tagPostImagesCss]}>
        {posts.map((post, i) => (
          <div key={`scrapped${i}`}>
            <Link to={`/${post.userName}/posting/${post.id}`}>
              <PostImagesOnly imageUrl={post.imageUrl} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

const tagPostImagesCss = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 33%;
  justify-content: center;
`;

export default ScrappedPosts;
