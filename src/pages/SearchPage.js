import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getPosts } from "../apis/SearchPage";
import { Global, css, jsx } from "@emotion/core";
import PostsForSearchPage from "../components/PostsForSearchPage";
import checkStatus from "../apis/check";
import { searchPosts } from "../apis/SearchPage";

function SearchPage({
  setUserOfActivePage,
  currentUser,
  setCurrentUser,
  setLoggedIn,
  userOfActivePage
}) {
  const sizeOfPicture = { width: "600px" };
  const [posting, setPosting] = useState([]);
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSearch = async () => {
    try {
      console.log(input);
      const response = await searchPosts(input);
      console.log(response);
      setPosting(response);
    } catch (e) {
      console.log(e);
    }
  };

  const getPostss = async () => {
    try {
      const { response, activeUser } = await checkStatus(
        currentUser,
        currentUser
      );
      setUserOfActivePage(response);
      setCurrentUser(response);

      console.log(response, activeUser);
      const posts = await getPosts();
      setPosting(posts);
      setLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(posting);

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
  display: flex;
  flex-wrap: wrap;
`;
export default SearchPage;
