import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import './MachineErrorTable.scss';

export const MachineErrorTable = ({ data }) => {
  const { loading, error } = useSelector((state) => state.machine);
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
      {!loading && !error && !!data.length && (
        <>
          {data.map((i) => (
            <tbody key={i}>
              <tr>
                <td className="MachineErrorTable__td">
                  <Form>
                    <Form.Check />
                  </Form>
                </td>
                <td className="MachineErrorTable__td">41304</td>
                <td className="MachineErrorTable__td">23/09/2022</td>
                <td className="MachineErrorTable__td">
                  Data has been received, launch initialization
                </td>
              </tr>
            </tbody>
          ))}
        </>
      )}
    </table>
  );
};
