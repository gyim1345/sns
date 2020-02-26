import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getPosts } from "../apis/SearchPage";
import { Global, css, jsx } from "@emotion/core";
import PostsForSearchPage from "../components/PostsForSearchPage";
import checkStatus from "../apis/check";

function SearchPage({
  setUserOfActivePage,
  currentUser,
  setCurrentUser,
  setLoggedIn,
  userOfActivePage
}) {
  const sizeOfPicture = { width: "600px" };
  const [posting, setPosting] = useState([]);

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

const PostsForSearchPageCss = css`
  display: flex;
  flex-wrap: wrap;
`;
export default SearchPage;
