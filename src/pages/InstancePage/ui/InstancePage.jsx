import { useNavigate, useParams } from 'react-router-dom';
import './InstancePage.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Instance from '../../../entities/Instance';
import { Button } from 'react-bootstrap';
import { MyModal } from '../../../shared/ui/MyModal/MyModal';
import { UpdateInstanceForm } from '../../../widgets/Forms/UpdateInstanceForm';
import { MyLoader } from '../../../shared/ui';

export const InstancePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const { instance, loading, error } = useSelector((state) => state.instance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Instance.getOne(id));
  }, []);

  return (
    <div className="InstancePage">
      <div className="InstancePage__top-btn">
        <Button onClick={() => navigate('/instancies')}>Back</Button>
        <Button
          variant="success"
          onClick={() => navigate(`/instance/${id}/machines`)}
        >
          Go to machines
        </Button>
      </div>
      <h1 className="InstancePage__title">{instance?.name}</h1>

      {loading && (
        <p style={{ margin: 'auto' }}>
          <MyLoader />
        </p>
      )}
      {error && <p style={{ margin: 'auto' }}>{error}</p>}

      <table className="InstancePage__table">
        <thead>
          <tr>
            <th className="InstancePage__table-th" scope="col">
              Value
            </th>
            <th className="InstancePage__table-th" scope="col">
              Key
            </th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(instance).map(([key, value]) => (
            <tr key={key}>
              <th className="InstancePage__table-th" scope="row">
                {key}
              </th>
              <td className="InstancePage__table-td">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="InstancePage__buttons">
        <Button onClick={() => setModalShow(true)}>Update</Button>
        <Button variant="danger">Delete</Button>
      </div>

      <MyModal
        show={modalShow}
        title="Create instance"
        onHide={() => setModalShow(false)}
      >
        <UpdateInstanceForm />
      </MyModal>
    </div>
  );
};
