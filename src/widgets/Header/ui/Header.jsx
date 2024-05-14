import Nav from 'react-bootstrap/Nav';
import './Header.scss';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../entities/User/store/userSlice';

function Header() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <Container>
        <Nav
          defaultActiveKey="/"
          as="ul"
          className="Header__nav"
          onSelect={(path) => navigate(path)}
        >
          {!user && (
            <Nav.Item as="li">
              <Nav.Link className="Header__link" eventKey="/">
                Login
              </Nav.Link>
            </Nav.Item>
          )}

          {user && (
            <>
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
                <Nav.Link
                  className="Header__link"
                  eventKey="/"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </div>
  );
}

export default Header;
