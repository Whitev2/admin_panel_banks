import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './InstanciesPage.scss';
import * as instance from '../../../entities/Instance';
import { InstanciesTable } from '../../../widgets/InstanciesTable';
import { MyModal } from '../../../shared/ui/MyModal/MyModal';
import { CreateInstanceForm } from '../../../widgets/CreateInstanceForm';
import { Filters } from '../../InstancePage/ui/Filters/Filters';

export const InstanciesPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const { instancies, loading, error } = useSelector((state) => state.instance);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(instance.getAll())
      .unwrap()
      .catch((err) => {
        if (err.message.includes('401')) {
          localStorage.removeItem('access_token');
          navigate('login');
        }
      });
  }, []);

  return (
    <div className="InstanciesPage">
      <header className="InstanciesPage__header">
        <h1>Instance Information</h1>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Create
        </Button>
      </header>

      <main>
        <Filters />
        <InstanciesTable instancies={instancies} />
      </main>

      <footer>
        {!loading && error && <p className="InstanciesPage__error">{error}</p>}
        {loading && <p className="InstanciesPage__loading">Loaging...</p>}
        {!loading && !error && !instancies.length && (
          <p className="InstanciesPage__loading">There is no instancies</p>
        )}
      </footer>

      <MyModal
        show={modalShow}
        title="Create instance"
        onHide={() => setModalShow(false)}
      >
        <CreateInstanceForm />
      </MyModal>
    </div>
  );
};
