import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/catGifActions';
import { Link, IndexLink } from 'react-router';


class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/cat-gifs">Cat GIFs</Link>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  catGifs: PropTypes.object.isRequired,
  children: PropTypes.element,
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
)(App);
