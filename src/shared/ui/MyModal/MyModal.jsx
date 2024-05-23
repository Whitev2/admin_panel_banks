import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as Instance from '../../../entities/Instance';
import React from 'react';

export const MyModal = ({ children, title, ...props }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    props.onHide();
    dispatch(Instance.action.clearError());
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{React.cloneElement(children, props)}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
