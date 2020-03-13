import React from "react";
import ScrapButton from "../svgIcons/ScrapButton";
import { scrap } from "../apis/post";

function Scrap({ postingId }) {
  const Scrapping = async () => {
    const response = await scrap(postingId);
    console.log(response);
  };

  return (
    <>
      <ScrapButton Scrapping={Scrapping} />
    </>
  );
}

export default Scrap;
