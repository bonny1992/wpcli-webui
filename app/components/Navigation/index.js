/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


function Navigation() {
  return <div>
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand href="#home">WP-CLI WebUI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => console.log('dio')}>Add new</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>;
}

Navigation.propTypes = {};

export default Navigation;
