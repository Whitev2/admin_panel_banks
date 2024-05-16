import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './UpdateInstanceForm.scss';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Instance from '../../../entities/Instance';
import { useParams } from 'react-router-dom';

function UpdateInstanceForm(props) {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState('');
  const { id } = useParams();
  const { instance, loading, error } = useSelector((state) => state.instance);
  const dispatch = useDispatch();

  const onSubmit = () => {
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Wrong name');
      return;
    }

    dispatch(Instance.update({ instance_id: id, name }))
      .unwrap()
      .then(() => props.onHide());
  };

  return (
    <Form className="CreateInstanceForm">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLogin">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            defaultValue={instance.name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Form.Group>

      <div className="CreateInstanceForm__btn-box">
        <Button variant="primary" onClick={onSubmit}>
          {loading ? 'Updating....' : 'Update'}
        </Button>

        {error && <p className="CreateInstanceForm__error">{error}</p>}
        {validationError && (
          <p className="CreateInstanceForm__error">{validationError}</p>
        )}
      </div>
    </Form>
  );
}

export default UpdateInstanceForm;
