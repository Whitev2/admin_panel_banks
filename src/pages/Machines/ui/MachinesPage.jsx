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
import { MyLoader } from '../../../shared/ui';
import { CreateMachineForm } from '../../../widgets/Forms/CreateMachineForm';
import * as Instance from '../../../entities/Instance';
import { useScrollbarGutter } from '../../../shared/hooks/useScrollbarGutter';

export const MachinesPage = () => {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const { machines, loading, error } = useSelector((state) => state.machine);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = useLogoutUser();

  useEffect(() => {
    dispatch(Instance.getOne(id));
  }, []);

  useEffect(() => {
    dispatch(machine.getAll(id))
      .unwrap()
      .catch((err) => {
        if (err.message.includes('401')) {
          logout();
        }
      });
  }, []);

  useScrollbarGutter(loading);

  return (
    <div className="MachinesPage">
      <header className="MachinesPage__header">
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
        {!loading && error && <p className="MachinesPage__error">{error}</p>}
        {loading && (
          <div className="MachinesPage__loading">
            <MyLoader />
          </div>
        )}
        {!loading && !error && !machines.length && (
          <p className="MachinesPage__loading">There is no machines</p>
        )}
      </footer>

      <MyModal
        show={modalShow}
        title="Create machine"
        onHide={() => setModalShow(false)}
      >
        <CreateMachineForm
          onHide={() => {
            setModalShow(false);
          }}
        />
      </MyModal>
    </div>
  );
};
