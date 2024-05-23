import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './CreateMachineForm.scss';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Project from '../../../../entities/Project';
import * as Machine from '../../../../entities/Machine';

function CreateMachineForm(props) {
  const { id, name: instanceName } = useSelector(
    (state) => state.instance.instance,
  );

  const [name, setName] = useState('');
  const [project, setProject] = useState(null);
  const [bankLogin, setBankLogin] = useState('');
  const [bankPassword, setBankPassword] = useState('');
  const [proxiProtocol, setProxiProtocol] = useState('');
  const [proxiHost, setProxiHost] = useState('');
  const [proxiPort, setProxiPort] = useState('');
  const [proxiLogin, setProxiLogin] = useState('');
  const [proxiPassword, setProxiPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  let { loading, error } = useSelector((state) => state.instance);
  let { projects, error: projectError } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Project.getAll());
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      Machine.create({
        name,
        instance_id: id,
        project_id: project,
        bank_login: bankLogin,
        bank_password: bankPassword,
        proxy_protocol: proxiProtocol,
        proxy_port: proxiPort,
        proxy_host: proxiHost,
        proxy_login: proxiLogin,
        proxy_password: proxiPassword,
      }),
    )
      .unwrap()
      .then((res) => props.onHide());
  };

  return (
    <Form className="CreateMachineForm" onSubmit={(e) => onSubmit(e)}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLogin">
        <Form.Label column sm="4">
          Name
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            isInvalid={!name}
            isValid={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Instance
        </Form.Label>
        <Col sm="8">
          <Form.Control
            disabled
            type="text"
            value={instanceName}
            isInvalid={!instanceName}
            isValid={instanceName}
            onChange={(e) => setHost(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Project
        </Form.Label>
        <Col sm="8">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setProject(e.target.value)}
            className="CreateMachineForm__select"
            isInvalid={!project}
            isValid={project}
          >
            <option>Select project</option>
            {projects.map((pr) => (
              <option key={pr.id} value={pr.id}>
                {pr.name}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Bank login
        </Form.Label>
        <Col sm="8">
          <Form.Control
            isInvalid={!bankLogin}
            isValid={bankLogin}
            type="text"
            placeholder="Enter login"
            onChange={(e) => setBankLogin(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Bank password
        </Form.Label>
        <Col sm="8">
          <Form.Control
            isInvalid={!bankPassword}
            isValid={bankPassword}
            type="password"
            placeholder="Enter passoword"
            onChange={(e) => setBankPassword(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Proxi protocol
        </Form.Label>
        <Col sm="8">
          <Form.Control
            isInvalid={!proxiProtocol}
            isValid={proxiProtocol}
            type="text"
            placeholder="Enter proxi protocol"
            onChange={(e) => setProxiProtocol(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Proxi host
        </Form.Label>
        <Col sm="8">
          <Form.Control
            isInvalid={!proxiHost}
            isValid={proxiHost}
            type="text"
            placeholder="Enter proxi host"
            onChange={(e) => setProxiHost(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Proxi port
        </Form.Label>
        <Col sm="8">
          <Form.Control
            isInvalid={!proxiPort}
            isValid={proxiPort}
            type="text"
            placeholder="Enter proxi port"
            onChange={(e) => setProxiPort(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Proxi login
        </Form.Label>
        <Col sm="8">
          <Form.Control
            isInvalid={!proxiLogin}
            isValid={proxiLogin}
            type="text"
            placeholder="Enter proxi login"
            onChange={(e) => setProxiLogin(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextHost">
        <Form.Label column sm="4">
          Proxi password
        </Form.Label>
        <Col sm="8">
          <Form.Control
            isInvalid={!proxiPassword}
            isValid={proxiPassword}
            type="password"
            placeholder="Enter proxi password"
            onChange={(e) => setProxiPassword(e.target.value)}
          />
        </Col>
      </Form.Group>

      <div className="CreateMachineForm__btn-box">
        <Button variant="primary" type="submit">
          {loading ? 'Loaging....' : 'Submit'}
        </Button>

        {(error || projectError) && (
          <p className="CreateMachineForm__error">{error}</p>
        )}
        {validationError && (
          <p className="CreateMachineForm__error">{validationError}</p>
        )}
      </div>
    </Form>
  );
}

export default CreateMachineForm;
