import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import './MachineLogTable.scss';

export const MachineLogTable = () => {
  const { loading, errorLogs, logs } = useSelector((state) => state.machine);

  if (!logs.length) {
    return <h2 style={{ textAlign: 'center' }}>No logs</h2>;
  }

  return (
    <table className="MachineErrorTable">
      <thead>
        <tr>
          <th className="MachineLogTable__th" scope="col">
            <Form>
              <Form.Check />
            </Form>
          </th>
          <th className="MachineLogTable__th" scope="col">
            Log ID
          </th>
          <th className="MachineLogTable__th" scope="col">
            Date/time
          </th>
          <th className="MachineLogTable__th" scope="col">
            Text
          </th>
        </tr>
      </thead>
      {!loading && !errorLogs && !!logs.length && (
        <>
          {logs.map((log) => (
            <tbody key={log.id}>
              <tr>
                <td className="MachineLogTable__td">
                  <Form>
                    <Form.Check />
                  </Form>
                </td>
                <td className="MachineLogTable__td">{log.id}</td>
                <td className="MachineLogTable__td">{log.createdAt}</td>
                <td className="MachineLogTable__td">{log.text}</td>
              </tr>
            </tbody>
          ))}
        </>
      )}
    </table>
  );
};
