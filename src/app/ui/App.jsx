import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Button, Container } from 'react-bootstrap';
import { Header } from '../../widgets/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
