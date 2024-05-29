import './UpdateProjectForm.scss';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Project from '../../../../entities/Project';

export const UpdateProjectForm = (props) => {
  let { project, loading, error } = useSelector((state) => state.project);
  const [url, setUrl] = useState('');
  const [name, setName] = useState(project.name);
  const [key, setKey] = useState('');
  const [validationError, setValidationError] = useState('');
  const dispatch = useDispatch();
  const onSubmit = async () => {
    setValidationError('');

    if (!key.trim() || !name.trim() || !url.trim()) {
      setValidationError('All fields are required');
      return;
    }

    dispatch(
      Project.update({
        id: project.id,
        data: { api_key: key, name, callback_url: url },
      }),
    )
      .unwrap()
      .then(() => {
        props.onHide();
      });
  };

  return (
    <Form className="CreateProjectForm">
      <Form.Group as={Row} className="mb-3" controlId="Name">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="Url">
        <Form.Label column sm="2">
          Url
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            value={project.callback_url}
            placeholder="Enter url"
            onChange={(e) => setUrl(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="Apiket">
        <Form.Label column sm="2">
          Api key
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            value={project.api_key}
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
