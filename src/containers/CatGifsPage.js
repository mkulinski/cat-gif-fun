import React, { PropTypes } from 'react';
import Gif from '../components/Gif';


export const CatGifsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Cat Gif Page</h1>
      <Gif url={props.catGifs.currUrl} />
    </div>
  );
};

CatGifsPage.propTypes = {
  props: PropTypes.object.isRequired,
};

export default CatGifsPage;
