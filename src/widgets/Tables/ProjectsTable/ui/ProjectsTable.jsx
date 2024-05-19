import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProjectsTable.scss';

export const ProjectsTable = ({ projects }) => {
  const { loading, error } = useSelector((state) => state.project);

  return (
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
                <td className="ProjectsTable__td">
                  <Link to={`/instance/${inst.id}`}>{p.name}</Link>
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
  );
};
