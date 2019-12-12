/**
 *
 * AddNew
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddNew from './selectors';
import reducer from './reducer';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { doShow, doHide } from './actions'

export function AddNew(props) {
  useInjectReducer({ key: 'addNew', reducer });

  return <>
    <Modal show={props.addNew.show} onHide={() => props.dispatch(doHide())}>
        <Modal.Header closeButton>
          <Modal.Title>Add new WordPress site</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.dispatch(doHide())}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.dispatch(doHide())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </>;
}

AddNew.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addNew: makeSelectAddNew(),
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

export default compose(withConnect)(AddNew);
