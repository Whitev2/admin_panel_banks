import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Header } from '../../widgets/Header';
import { useDispatch } from 'react-redux';
import { setUser } from '../../entities/User/store/userSlice';

function App() {
  const dispatch = useDispatch('');

  useEffect(() => {
    try {
      const token = localStorage.getItem('access_token');
      dispatch(setUser(token));
    } catch (e) {
      console.log(e);
    }
  }, []);

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
