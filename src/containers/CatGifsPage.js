import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/catGifActions';
// import FuelSavingsForm from '../components/Gifscomponent';

export const CatGifsPage = (props) => {
  return (
    <div>Cat Gif</div>
  );
};

CatGifsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  catGifs: PropTypes.object.isRequired
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
