import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import React from 'react';
import NavBar from './navbar';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    exploreLink: <Link to="/explore">explore</Link>,
    startProject: <Link to="/project/new">Link</Link>
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);