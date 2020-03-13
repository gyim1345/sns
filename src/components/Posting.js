import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Comment from "./Comment";
import toTop from "./toTop";
import Like from "./Like";
import { css } from "@emotion/core";
import Modal from "react-modal";
import PostCommentButton from "./PostCommentButton";
import DirectMessage from "../svgIcons/DirectMessage.js";
import ModalBox from "./ModalBox";
import ScrapButton from "../svgIcons/ScrapButton";
import { getUserImage } from "../apis/post";
import Scrap from "./Scrap";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

function Posting({
  posting,
  postingAll,
  setPosting,
  comments,
  addComment,
  sizeOfPicture,
  userOfActivePage,
  setUserOfActivePage,
  currentUser,
  commentAPI,
  setCommentAPI
}) {
  const [input, setInput] = useState([]);

  const [image, setImage] = useState("");

  const userImage = async () => {
    try {
      const response = await getUserImage(posting.userName);
      setImage(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userImage();
  }, []);

  const changeUser = () => {
    setUserOfActivePage(posting.userName);
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  const addToComment = () => {
    return addComment(null, posting.id, input, currentUser);
  };

  return (
    <>
      <h1 css={[h1]}>
        <div css={[leftElement]}>
          <img css={[imgCss]} src={image} alt="" width={35} />
          <div css={[nameSize]}>
            <Link
              to={`/profile/${posting.userName}`}
              css={[fuck]}
              onClick={() => {
                changeUser();
                toTop();
              }}
            >
              {posting.userName}
            </Link>
          </div>
        </div>
        <ModalBox
          posting={posting}
          setPosting={setPosting}
          currentUser={currentUser}
          editInput={input}
        />
      </h1>
      <div css={[title]}>
        <Link to={`/${userOfActivePage}/posting/${posting.id}`} onClick={toTop}>
          <img
            src={posting.imageUrl}
            alt=""
            width={sizeOfPicture.width}
            height={sizeOfPicture.height}
          />
        </Link>
        <div
          css={[postingButtons]}
          style={{
            position: "relative"
          }}
        >
          <Like
            posting={posting}
            currentUser={currentUser}
            setPosting={setPosting}
            postingAll={postingAll}
          />
          <PostCommentButton />
          <DirectMessage />
          <Scrap postingId={posting.id} />
        </div>
        <div css={[displayFlex]}>
          <div css={[postUserNameBold]}> {posting.userName}</div>
          <div css={[wordBreak]}>{posting.title}</div>
        </div>
        <div css={[commentAreaCss]}>
          <Route exact path={`/${userOfActivePage}/posting/${posting.id}`}>
            <Comment
              posting={posting}
              comments={comments}
              userOfActivePage={userOfActivePage}
              currentUser={currentUser}
              commentAPI={commentAPI}
              setCommentAPI={setCommentAPI}
              addComment={addComment}
            />
            <div css={[commentInputArea]}>
              <input
                value={input}
                onChange={onChange}
                placeholder={"댓글 달기..."}
                css={[commentInputBox]}
              />
              <button
                type="button"
                onClick={addToComment}
                id="buttonAddComment"
                css={[commentInputButton]}
              >
                게시
              </button>
            </div>
          </Route>
        </div>
      </div>
    </>
  );
}

const commentInputButton = css`
  background-color: white;
  flex: none;
`;
/* min-width: max-content; */

const commentInputBox = css`
  padding: 15px;
  width: 100%;
  border: none;
  outline: none;
`;

const commentInputArea = css`
  display: flex;
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  padding: 0px;
  margin-left: -10px;
`;
const commentAreaCss = css`
  padding-left: 10px;
`;

const displayFlex = css`
  display: flex;
  margin-left: 16px;
`;

const postUserNameBold = css`
  font-weight: bold;
`;

const leftElement = css`
  display: flex;
`;

const wordBreak = css`
  word-break: break-all;
  margin-left: 6px;
  margin-bottom: 16px;
`;

const nameSize = css`
  font-size: 18px;
  margin-left: 16px;
`;

const fuck = css`
  text-decoration: none;
  font-size: 14px;
  color: black;
  align-items: center;
  justify-items: center;
  align-items: center;
`;

// const fuck = css`
//   text-decoration: none;
//   display: grid;
//   grid-template-columns: 10% 15% 75%;
//   padding: 0px 0px 10px 0px;
//   justify-items: center;
//   align-items: center;
// `;

const h1 = css`
  display: flex;
  border-top: solid 1px;
  border-left: solid 1px;
  border-right: solid 1px;
  background-color: white;
  border-color: lightgrey;
  padding: 12px 12px 12px 12px;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  width: 575px;
`;

// const h1 = css`
//   border-top: solid 1px;
//   width: 580px;
//   border-left: solid 1px;
//   border-right: solid 1px;
//   background-color: white;
//   border-color: lightgrey;
//   padding: 5px 15px 0px 5px;
//   margin: 0px 0px -5px 0px;
// `;
const postingButtons = css`
  display: flex;
  margin-top: 4px;
  margin-bottom: 24px;
`;
const imgCss = css`
  border-radius: 50%;
`;

const title = css`
  text-decoration: none;
  border: 1px solid;
  border-width: 1px;
  width: 600px;
  background-color: white;
  border-color: lightgrey;
`;

// Posting.propTypes = {
//   userOfActivePage: PropTypes.string,
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string,
//   sizeOfPicture: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   posting: PropTypes.exact({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     imageUrl: PropTypes.string,
//     userName: PropTypes.string,
//     like: PropTypes.arrayOf(PropTypes.string)
//   }),
//   postingAll: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   comments: PropTypes.arrayOf(PropTypes.object),
//   setPosting: PropTypes.elementType,
//   addComment: PropTypes.elementType,
//   onChangeComment: PropTypes.elementType,
//   commentAPI: PropTypes.oneOfType([PropTypes.array]),
//   setCommentAPI: PropTypes.elementType
// };

// Posting.defaultProps = {
//   userOfActivePage: "",
//   setUserOfActivePage: "",
//   currentUser: "",
//   sizeOfPicture: 0,
//   posting: [],
//   comments: {},
//   addComment: "",
//   onChangeComment: ""
// };

export default Posting;
