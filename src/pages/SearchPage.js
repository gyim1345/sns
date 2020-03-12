import React, { useState, useEffect } from "react";
import { getPosts } from "../apis/SearchPage";
import { css } from "@emotion/core";
import PostsForSearchPage from "../components/PostsForSearchPage";
import { searchPosts } from "../apis/SearchPage";
import Footer from "../components/Footer";

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
      console.log(response);
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

  let postingByThree = posting
    .map(
      (element, index) =>
        (element = [
          posting[index * 3 + 0],
          posting[index * 3 + 1],
          posting[index * 3 + 2]
        ])
    )
    .slice(0, Math.ceil(posting.length / 3))
    .map(x => x.filter(y => y !== undefined));

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
        {postingByThree.map((posting, i) => (
          <ul key={`searchPage${i}`}>
            <div css={[postingByThreeCss]}>
              {posting.map((post, j) => (
                <ul key={`searchPage${i * 3 + j}`}>
                  <PostsForSearchPage
                    posting={post}
                    sizeOfPicture={sizeOfPicture}
                    userOfActivePage={currentUser}
                    setUserOfActivePage={setUserOfActivePage}
                  />
                </ul>
              ))}
            </div>
          </ul>
        ))}
      </div>
      <Footer />
    </>
  );
}

const postingByThreeCss = css`
  display: flex;
  margin-bottom: 5px;
`;
const inputBarCss = css`
  top: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostsForSearchPageCss = css`
  justify-content: center;
  top: 85px;
  flex-direction: column;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;
export default SearchPage;
