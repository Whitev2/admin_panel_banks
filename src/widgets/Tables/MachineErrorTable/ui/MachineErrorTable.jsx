import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import './MachineErrorTable.scss';

export const MachineErrorTable = () => {
  const { loading, errorErrors, errors } = useSelector(
    (state) => state.machine,
  );

  if (!errors.length) {
    return <h2 style={{ textAlign: 'center' }}>No errors</h2>;
  }

  return (
    <table className="MachineErrorTable">
      <thead>
        <tr>
          <th className="MachineErrorTable__th" scope="col">
            <Form>
              <Form.Check />
            </Form>
          </th>
          <th className="MachineErrorTable__th" scope="col">
            Error ID
          </th>
          <th className="MachineErrorTable__th" scope="col">
            Date/time
          </th>
          <th className="MachineErrorTable__th" scope="col">
            Text
          </th>
        </tr>
      </thead>
      {!loading && !errorErrors && !!errors.length && (
        <>
          {errors.map((er) => (
            <tbody key={er.id}>
              <tr>
                <td className="MachineErrorTable__td">
                  <Form>
                    <Form.Check />
                  </Form>
                </td>
                <td className="MachineErrorTable__td">{er.id}</td>
                <td className="MachineErrorTable__td">{er.createdAt}</td>
                <td className="MachineErrorTable__td">{er.text}</td>
              </tr>
            </tbody>
          ))}
        </>
      )}
    </table>
  );
};
