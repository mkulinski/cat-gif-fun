import React, { PropTypes } from 'react';
import '../styles/about-page.scss';


const Gif = ({ url }) => {
  return (
    <img src={url} />
  );
};

Gif.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Gif;
