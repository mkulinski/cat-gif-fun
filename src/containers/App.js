import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/catGifActions';
import Nav from '../components/Nav';


class App extends React.Component {
  componentWillMount() {
    this.props.actions.grabGifUrl();
  }
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
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
