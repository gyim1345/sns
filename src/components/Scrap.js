import React from "react";
import ScrapButton from "../svgIcons/ScrapButton";
import { scrap } from "../apis/post";
import Swal from "sweetalert2"

function Scrap({ postingId }) {
  const Scrapping = async () => {
    const response = await scrap(postingId);
    Swal.fire(`${response.message}`);
  };

  return (
    <>
      <ScrapButton Scrapping={Scrapping} />
    </>
  );
}

export default Scrap;
