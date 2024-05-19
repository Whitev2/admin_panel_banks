import './CreateProjectForm.scss';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Project from '../../../../entities/Project';

export const CreateProjectForm = (props) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [validationError, setValidationError] = useState('');
  let { loading, error } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setValidationError('');

    if (!key.trim() || !name.trim() || !url.trim()) {
      setValidationError('All fields are required');
      return;
    }

    dispatch(Project.create({ key, name, url }))
      .unwrap()
      .then((res) => props.onHide());
  };

  return (
    <Form className="CreateProjectForm">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLogin">
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

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="2">
          Url
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter url"
            onChange={(e) => setUrl(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="2">
          Api key
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter url"
            onChange={(e) => setKey(e.target.value)}
          />
        </Col>
      </Form.Group>

      <div className="CreateProjectForm__btn-box">
        <Button variant="primary" onClick={onSubmit}>
          {loading ? 'Loaging....' : 'Submit'}
        </Button>

        {error && <p className="CreateProjectForm__error">{error}</p>}
        {validationError && (
          <p className="CreateProjectForm__error">{validationError}</p>
        )}
      </div>
    </Form>
  );
};
