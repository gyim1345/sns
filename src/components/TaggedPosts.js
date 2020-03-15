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
      setPosts(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTaggedPost();
  }, []);

  return (
    <div css={[tagPostImagesCss]}>
      {posts.map(post => (
        <Link to={`/${post.userName}/posting/${post.id}`} key={post.id}>
          <PostImagesOnly imageUrl={post.imageUrl} />
        </Link>
      ))}
    </div>
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
