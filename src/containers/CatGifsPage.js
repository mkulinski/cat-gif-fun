import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/catGifActions';
import Gif from '../components/Gif';
import '../styles/cat-gifs-page.scss';


const CatGifsPage = ({ catGifs, actions }) => {
  return (
    <div className="component-container">
      <h1>All The Cat GIFs You Can Handle</h1>
      <Gif url={catGifs.currUrl} className="gif" />
      <button onClick={actions.grabGifUrl}>
        New Giphy!
      </button>
    </div>
  );
};

CatGifsPage.propTypes = {
  catGifs: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    catGifs: state.catGifs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatGifsPage);
