/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNavigation from './selectors';
import makeSelectAddNew from '../AddNew/selectors'
import reducer from './reducer';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { doShow, doHide } from '../AddNew/actions'

export function Navigation(props) {
  useInjectReducer({ key: 'navigation', reducer });

  return <div>
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand href="#home">WP-CLI WebUI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => props.dispatch(doShow())}>Add new</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>;
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navigation: makeSelectNavigation(),
  addnew: makeSelectAddNew(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Navigation);
