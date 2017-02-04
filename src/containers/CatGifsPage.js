import React, { PropTypes } from 'react';
import Gif from '../components/Gif';


const CatGifsPage = (props) => {
  console.log(props);
  const { catGifs, actions } = props;
  const handleClick = () => {
    console.log('clicked');
    // run get request to giphy
    actions.grabGifUrl();
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
