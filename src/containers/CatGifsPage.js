import React, { PropTypes } from 'react';
import Gif from '../components/Gif';


const CatGifsPage = (props) => {
  // console.log(props);
  const { catGifs, actions } = props;
  const handleClick = () => {
    // check if cachedUrls.length < 1
      // if it is run action.grabGifUrl
      actions.grabGifUrl();
      // else just grab the last str in cachedUrls
      // and make it currUrl
    console.log('clicked');
  };

  return (
    <div>
      <h1>Cat Gif Page</h1>
      <Gif url={catGifs.currUrl} />
      <button onClick={handleClick}>
        New Giphy
      </button>
    </div>
  );
};

CatGifsPage.propTypes = {
  catGifs: PropTypes.object.isRequired,
};

export default CatGifsPage;
