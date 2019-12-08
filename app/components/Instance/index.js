/**
 *
 * Instance
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Instance(props) {

  let isShown = false;

  const hidePassword = () => {
    isShown = !isShown
  }
  return <div>
    <Container>
      <Row>
        <Col><a href={props.url}>{props.url}</a></Col>
        <Col><input type="text" value={props.password} readOnly /></Col>  { /* TODO: Blurred until click */ }
      </Row>
    </Container>
  </div>;
}

Instance.propTypes = {};

export default Instance;
