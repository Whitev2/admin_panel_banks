import { useDispatch, useSelector } from 'react-redux';
import './MachinesPage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { MyModal } from '../../../shared/ui';
import * as machine from '../../../entities/Machine';
import { MachineFilters } from './Filters/MachineFilters';
import { MachinesTable } from '../../../widgets/Tables/MachinesTable';
import { useLogoutUser } from '../../../entities/User';

export const MachinesPage = () => {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const { machines, loading, error } = useSelector((state) => state.machine);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = useLogoutUser();

  useEffect(() => {
    dispatch(machine.getAll(id))
      .unwrap()
      .catch((err) => {
        if (err.message.includes('401')) {
          logout();
        }
      });
  }, []);

  return (
    <div className="InstanciesPage">
      <header className="InstanciesPage__header">
        <h1>Machine Information</h1>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Create
        </Button>
      </header>

      <main>
        main
        <MachineFilters />
        <MachinesTable machines={machines} />
      </main>

      <footer>
        {!loading && error && <p className="InstanciesPage__error">{error}</p>}
        {loading && <p className="InstanciesPage__loading">Loaging...</p>}
        {!loading && !error && !machines.length && (
          <p className="InstanciesPage__loading">There is no instancies</p>
        )}
      </footer>

      <MyModal
        show={modalShow}
        title="Create instance"
        onHide={() => setModalShow(false)}
      >
        {/* <CreateInstanceForm /> */}
        create machine form
      </MyModal>
    </div>
  );
};
