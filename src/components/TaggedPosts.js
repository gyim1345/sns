import React, { useState, useEffect } from "react";
import { taggedPostsAPI } from "../apis/post";
import { Link } from "react-router-dom";
import PostImagesOnly from "./PostImagesOnly";
import { css } from "@emotion/core";

function TaggedPosts({ user }) {
  const [posts, setPosts] = useState([]);

  const getTaggedPost = async () => {
    try {
      const response = await taggedPostsAPI(user);
      console.log(response);
      setPosts(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTaggedPost();
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

export default TaggedPosts;
