import React, { useEffect, useState } from 'react';
import ScrapButton from '../svgIcons/ScrapButton';
import ScrapFilledButton from '../svgIcons/ScrapFilledButton';
import { scrap } from '../apis/post';
import Swal from 'sweetalert2';
import { getPostIsScrapped } from '../apis/post';

function Scrap({ postingId }) {
  const [isScrapped, setisScrapped] = useState(false);
  const Scrapping = async () => {
    const response = await scrap(postingId);
    Swal.fire(`${response.message}`);
    setisScrapped(true);
  };

  const scrappedIsTrue = async () => {
    const scrappedStatus = await getPostIsScrapped(postingId);
    setisScrapped(scrappedStatus);
  };

  useEffect(() => {
    scrappedIsTrue();
  }, []);

  return (
    <>
      {isScrapped ? (
        <ScrapFilledButton Scrapping={Scrapping} />
      ) : (
        <ScrapButton Scrapping={Scrapping} />
      )}
    </>
  );
}

export default Scrap;
