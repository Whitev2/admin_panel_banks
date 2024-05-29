import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './MachinesTable.scss';
import { Link } from 'react-router-dom';
import { MySwitcher } from '../../../../shared/ui/MySwitcher/MySwitcher';

export const MachinesTable = ({ machines }) => {
  const { loading, error } = useSelector((state) => state.instance);

  return (
    <table className="InstanciesTable">
      <thead>
        <tr>
          <th className="InstanciesTable__th" scope="col">
            <Form>
              <Form.Check />
            </Form>
          </th>
          <th className="InstanciesTable__th" scope="col">
            Machine Name
          </th>
          <th className="InstanciesTable__th" scope="col">
            Instance Name
          </th>
          <th className="InstanciesTable__th" scope="col">
            Project
          </th>
          <th className="InstanciesTable__th" scope="col">
            Status
          </th>
          <th className="InstanciesTable__th" scope="col">
            State
          </th>
        </tr>
      </thead>
      {!loading && !error && !!machines.length && (
        <>
          {machines.map((m) => (
            <tbody key={m.id}>
              <tr>
                <td className="InstanciesTable__td">
                  <Form>
                    <Form.Check />
                  </Form>
                </td>
                <td className="InstanciesTable__td">
                  <Link to={`/instance/${m.instance_id}/machine/${m.id}`}>
                    {m.name}
                  </Link>
                </td>
                <td className="InstanciesTable__td">{m.instance_id}</td>
                <td className="InstanciesTable__td">{m.project_id}</td>
                <td className="InstanciesTable__td">{m.status}</td>
                <td className="InstanciesTable__td InstanciesTable__td--switcher">
                  <MySwitcher
                    started={m.started}
                    machineStatus={m.status}
                    id={m.id}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </>
      )}
    </table>
  );
};
