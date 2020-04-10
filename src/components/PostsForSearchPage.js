import React from "react";
import { Link } from "react-router-dom";

function PostsForSearchPage({ posting, setUserOfActivePage }) {
  const changeUser = () => {
    setUserOfActivePage(posting.userName);
  };
  return (
    <>
      <Link
        to={`/posting/${posting.id}`}
        onClick={changeUser}
      >
        <div className="test" style={{ position: "relative", width: "26vw" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundImage: `url(${posting.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div style={{ paddingTop: "100%" }}></div>
        </div>
      </Link>
    </>
  );
}

export default PostsForSearchPage;
