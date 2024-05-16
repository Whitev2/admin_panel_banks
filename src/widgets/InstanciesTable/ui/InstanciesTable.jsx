import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './InstanciesTable.scss';
import { Link } from 'react-router-dom';

export const InstanciesTable = ({ instancies }) => {
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
            Instance Name
          </th>
          <th className="InstanciesTable__th" scope="col">
            Host
          </th>
          <th className="InstanciesTable__th" scope="col">
            Active Machines
          </th>
          <th className="InstanciesTable__th" scope="col">
            Stopped Machines
          </th>
          <th className="InstanciesTable__th" scope="col">
            Available Machines
          </th>
          <th className="InstanciesTable__th" scope="col">
            Status
          </th>
        </tr>
      </thead>
      {!loading && !error && !!instancies.length && (
        <>
          {instancies.map((inst) => (
            <tbody key={inst.id}>
              <tr>
                <td className="InstanciesTable__td">
                  <Form>
                    <Form.Check />
                  </Form>
                </td>
                <td className="InstanciesTable__td">
                  <Link to={`/instance/${inst.id}`}>{inst.name}</Link>
                </td>
                <td className="InstanciesTable__td">{inst.host}</td>
                <td className="InstanciesTable__td">{inst.worked_machines}</td>
                <td className="InstanciesTable__td">{inst.stopped_machines}</td>
                <td className="InstanciesTable__td">
                  {inst.available_machines}
                </td>
                <td className="InstanciesTable__td">{inst.status}</td>
              </tr>
            </tbody>
          ))}
        </>
      )}
    </table>
  );
};
