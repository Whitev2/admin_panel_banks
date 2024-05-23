import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import './MachineInfoTable.scss';
import { Link } from 'react-router-dom';

export const MachineInfoTable = ({ data }) => {
  const { loading, error } = useSelector((state) => state.machine);
  return (
    <table className="MachineInfoTable">
      <thead>
        <tr>
          <th className="MachineInfoTable__th" scope="col">
            <Form>
              <Form.Check />
            </Form>
          </th>
          <th className="MachineInfoTable__th" scope="col">
            UPI ID
          </th>
          <th className="MachineInfoTable__th" scope="col">
            Date
          </th>
          <th className="MachineInfoTable__th" scope="col">
            {''}
          </th>
          <th className="MachineInfoTable__th" scope="col">
            Payable Amount
          </th>
        </tr>
      </thead>
      {!loading && !error && !!data.length && (
        <>
          {data.map((i) => (
            <tbody key={i}>
              <tr>
                <td className="MachineInfoTable__td">
                  <Form>
                    <Form.Check />
                  </Form>
                </td>
                <td className="MachineInfoTable__td">413040182781</td>
                <td className="MachineInfoTable__td">23/09/2022</td>
                <td className="MachineInfoTable__td">Jacob Marcus</td>
                <td className="MachineInfoTable__td">1,260 INR</td>
              </tr>
            </tbody>
          ))}
        </>
      )}
    </table>
  );
};
