import React, { useState, useEffect } from "react";
import { getPosts } from "../apis/SearchPage";
import { css } from "@emotion/core";
import PostsForSearchPage from "../components/PostsForSearchPage";
import { searchPosts } from "../apis/SearchPage";

function SearchPage({ setUserOfActivePage, currentUser, setLoggedIn }) {
  const sizeOfPicture = { width: "600px" };
  const [posting, setPosting] = useState([]);
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSearch = async () => {
    try {
      const response = await searchPosts(input);
      setPosting(response);
    } catch (e) {
      console.log(e);
    }
  };

  const getPostss = async () => {
    try {
      const posts = await getPosts();
      setPosting(posts);
      setLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPostss();
  }, []);

  return (
    <>
      <div css={[inputBarCss]}>
        <input
          type="text"
          value={input}
          onChange={e => onChange(e)}
          placeholder="search"
        />
        <button type="button" onClick={onSearch}>
          search
        </button>
      </div>
      <div css={[PostsForSearchPageCss]}>
        {posting.map((posting, i) => (
          <ul key={`searchPage${i}`}>
            <PostsForSearchPage
              posting={posting}
              sizeOfPicture={sizeOfPicture}
              userOfActivePage={currentUser}
              setUserOfActivePage={setUserOfActivePage}
            />
          </ul>
        ))}
      </div>
    </>
  );
}

const inputBarCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostsForSearchPageCss = css`
justify-content: center;
  top: 70px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
export default SearchPage;
