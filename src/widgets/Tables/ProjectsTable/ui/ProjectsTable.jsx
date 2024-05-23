import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './ProjectsTable.scss';
import { MyModal } from '../../../../shared/ui/MyModal/MyModal';
import { UpdateProjectForm } from '../../../Forms/UpdateProjectForm';
import * as project from '../../../../entities/Project';

export const ProjectsTable = ({ projects }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.project);
  const [modalShow, setModalShow] = useState(false);

  const showUpdateForm = (p) => {
    setModalShow(true);
    dispatch(project.action.setProject(p));
  };

  return (
    <>
      <table className="ProjectsTable">
        <thead>
          <tr>
            <th className="ProjectsTable__th" scope="col">
              <Form>
                <Form.Check />
              </Form>
            </th>
            <th className="ProjectsTable__th" scope="col">
              Instance Name
            </th>
            <th className="ProjectsTable__th" scope="col">
              Running Machines
            </th>
            <th className="ProjectsTable__th" scope="col">
              Today Transactions
            </th>
            <th className="ProjectsTable__th" scope="col">
              Available Machines
            </th>
          </tr>
        </thead>
        {!loading && !error && !!projects.length && (
          <>
            {projects.map((p) => (
              <tbody key={p.id}>
                <tr>
                  <td className="ProjectsTable__td">
                    <Form>
                      <Form.Check />
                    </Form>
                  </td>
                  <td
                    className="ProjectsTable__td ProjectsTable__td--name"
                    onClick={() => showUpdateForm(p)}
                  >
                    {p.name}
                  </td>
                  <td className="ProjectsTable__td">{p.day_transfers}</td>
                  <td className="ProjectsTable__td">{p.worked_machines}</td>
                  <td className="ProjectsTable__td">{p.available_machines}</td>
                </tr>
              </tbody>
            ))}
          </>
        )}
      </table>

      <MyModal
        show={modalShow}
        title="Updade project"
        onHide={() => setModalShow(false)}
      >
        <UpdateProjectForm />
      </MyModal>
    </>
  );
};
