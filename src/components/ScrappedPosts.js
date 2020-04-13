import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { css } from '@emotion/core';

import { scrappedPosts } from '../apis/scrap';
import PostImagesOnly from './PostImagesOnly';

function ScrappedPosts({ user }) {
  const [posts, setPosts] = useState([]);

  const ScrappedPosts = async () => {
    try {
      const response = await scrappedPosts(user);
      setPosts(response);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Internal Error'
      });
    }
  };

  useEffect(() => {
    ScrappedPosts();
  }, []);

  return (
    <div css={[tagPostImagesCss]}>
      {posts.map(post => (
        <Link to={`/posting/${post.id}`} key={post.id}>
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

export default ScrappedPosts;
