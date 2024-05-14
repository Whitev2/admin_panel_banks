import Nav from 'react-bootstrap/Nav';
import './Header.scss';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <Container>
        <Nav
          defaultActiveKey="/"
          as="ul"
          className="Header__nav"
          onSelect={(path) => navigate(path)}
        >
          <Nav.Item as="li">
            <Nav.Link className="Header__link" eventKey="/">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="Header__link" eventKey="instancies">
              Instancies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="Header__link" eventKey="machines">
              Machines
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="Header__link" eventKey="/">
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;
