import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getUserInfoAPI } from "../apis/post";

function UserInfoHead({ userOfActivePage }) {
  const [info, setInfo] = useState("");

  const userInfo = async () => {
    try {
      const response = await getUserInfoAPI(userOfActivePage);
      setInfo(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <>
      <img src={info.image} alt="Smiley face" height="42" width="42" />
      &nbsp;&nbsp;&nbsp;
      {userOfActivePage}
      &nbsp;&nbsp;&nbsp;
      <span> 게시물 갯수</span>
      {info.postNumber}
      &nbsp;&nbsp;&nbsp;following 갯수
      {info.followerNumber}
    </>
  );
}

UserInfoHead.propTypes = {
  userOfActivePage: PropTypes.string
};

UserInfoHead.defaultProps = {
  userOfActivePage: ""
};

export default UserInfoHead;
