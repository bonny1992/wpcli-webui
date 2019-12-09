/**
 *
 * Instance
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Instance(props) {

  const [isVisible, setVisible] = useState(false)
  const [password, setPassword] = useState('*********')

  const togglePassword = () => {
    console.log(password)
    if(!isVisible) {
      setVisible(true)
      setPassword(props.password)
    }
    else {
      setVisible(false)
      setPassword('*********')
    }
    

  }
  return <div>
    <hr />
    <Container>
      <Row>
        <Col><h2>URL</h2><a href={props.url} target='_new'>{props.url}</a></Col>
        <Col><h2>Password</h2><p onClick={togglePassword}>{password}</p></Col>  { /* TODO: Blurred until click */ }
      </Row>
    </Container>
    <hr />
  </div>;
}

Instance.propTypes = {};

export default Instance;
