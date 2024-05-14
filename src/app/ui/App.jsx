import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Header } from '../../widgets/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../entities/User/store/userSlice';
import { Sidebar } from '../../widgets/SideBar/ui/SideBar';

function App() {
  const dispatch = useDispatch('');
  const { user } = useSelector((state) => state.user);

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
        <div className="App__main">
          {user && <Sidebar />}
          <Outlet />
        </div>
      </Container>
    </div>
  );
}

export default App;
