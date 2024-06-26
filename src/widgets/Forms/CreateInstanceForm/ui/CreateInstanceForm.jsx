import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './CreateInstanceForm.scss';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Instance from '../../../../entities/Instance';

function CreateInstanceForm(props) {
  const [host, setHost] = useState('');
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState('');
  let { loading, error } = useSelector((state) => state.instance);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setValidationError('');

    if (!host.trim() || !name.trim()) {
      setValidationError('Wrong host or name');
      return;
    }

    dispatch(Instance.create({ host, name }))
      .unwrap()
      .then((res) => props.onHide());
  };

  return (
    <Form className="CreateInstanceForm">
      <Form.Group as={Row} className="mb-3" controlId="Name">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="Host">
        <Form.Label column sm="2">
          Host
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter host"
            onChange={(e) => setHost(e.target.value)}
          />
        </Col>
      </Form.Group>

      <div className="CreateInstanceForm__btn-box">
        <Button variant="primary" onClick={onSubmit}>
          {loading ? 'Loaging....' : 'Submit'}
        </Button>

        {error && <p className="CreateInstanceForm__error">{error}</p>}
        {validationError && (
          <p className="CreateInstanceForm__error">{validationError}</p>
        )}
      </div>
    </Form>
  );
}

export default CreateInstanceForm;
