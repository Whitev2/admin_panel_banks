import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import './MachineInfoTable.scss';

export const MachineInfoTable = () => {
  const { loading, errorTrans, transactions } = useSelector(
    (state) => state.machine,
  );

  if (!transactions.length) {
    return <h2 style={{ textAlign: 'center' }}>No transactions</h2>;
  }

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
            UTR
          </th>
          <th className="MachineInfoTable__th" scope="col">
            Payable Amount
          </th>
        </tr>
      </thead>
      {!loading && !errorTrans && !!transactions.length && (
        <>
          {transactions.map((tr) => (
            <tbody key={tr.id}>
              <tr>
                <td className="MachineInfoTable__td">
                  <Form>
                    <Form.Check />
                  </Form>
                </td>
                <td className="MachineInfoTable__td">{tr.upi_id}</td>
                <td className="MachineInfoTable__td">{tr.date}</td>
                <td className="MachineInfoTable__td">{tr.utr}</td>
                <td className="MachineInfoTable__td">{tr.balance}</td>
              </tr>
            </tbody>
          ))}
        </>
      )}
    </table>
  );
};
