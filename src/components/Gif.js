import React, { PropTypes } from 'react';


const Gif = ({ url }) => {
  return (
    <img src={`http://i.giphy.com/${url}.gif`} />
  );
};

Gif.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Gif;
