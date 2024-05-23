import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import './MachineLogTable.scss';

export const MachineLogTable = ({ data }) => {
  const { loading, error } = useSelector((state) => state.machine);
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
            Error ID
          </th>
          <th className="MachineLogTable__th" scope="col">
            Date/time
          </th>
          <th className="MachineLogTable__th" scope="col">
            Text
          </th>
        </tr>
      </thead>
      {!loading && !error && !!data.length && (
        <>
          {data.map((i) => (
            <tbody key={i}>
              <tr>
                <td className="MachineLogTable__td">
                  <Form>
                    <Form.Check />
                  </Form>
                </td>
                <td className="MachineLogTable__td">41304</td>
                <td className="MachineLogTable__td">23/09/2022</td>
                <td className="MachineLogTable__td">Logs here ....</td>
              </tr>
            </tbody>
          ))}
        </>
      )}
    </table>
  );
};
