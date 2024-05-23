import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './LoginForm.scss';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../entities/User';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    dispatch(loginUser({ login, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/instancies');
    }
  }, [user]);

  return (
    <Form className="LoginForm">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLogin">
        <Form.Label column sm="2">
          Login
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter login"
            onChange={(e) => setLogin(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Form.Group>

      <div className="LoginForm__btn-box">
        <Button variant="primary" onClick={onSubmit}>
          {loading ? 'Loaging....' : 'Submit'}
        </Button>

        {error && <p className="LoginForm__error">{error}</p>}
      </div>
    </Form>
  );
}

export default LoginForm;
