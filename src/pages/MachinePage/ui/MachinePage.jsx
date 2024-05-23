import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import './MachinePage.scss';
import { MachineErrorTable } from '../../../widgets/Tables/MachineErrorTable';
import { MachineInfoTable } from '../../../widgets/Tables/MachineInfoTable';
import { MachineLogTable } from '../../../widgets/Tables/MachineLogTable';
import { MyLoader } from '../../../shared/ui';
import * as machine from '../../../entities/Machine';
import { useParams } from 'react-router-dom';

export const MachinePage = () => {
  const { machine_id } = useParams();
  const [table, setTable] = useState('Transactions');
  const { loading, transactions, errors } = useSelector(
    (state) => state.machine,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(machine.getLogs(machine_id));
    dispatch(machine.getTrans(machine_id));
    dispatch(machine.getErrors(machine_id));
  }, []);

  return (
    <div className="MachinePage">
      <h1>Machine</h1>
      <header className="MachinePage__header">
        <div className="MachinePage__info">
          <p className="MachinePage__info-key">Transactions</p>
          <p className="MachinePage__info-value">{transactions.length}</p>
        </div>
        <div className="MachinePage__info">
          <p className="MachinePage__info-key">Errors</p>
          <p className="MachinePage__info-value">{errors.length}</p>
        </div>
        <div className="MachinePage__info">
          <p className="MachinePage__info-key">Balance</p>
          <p className="MachinePage__info-value">115,000 INR</p>
        </div>
      </header>

      <main className="MachinePage__main">
        <div className="MachinePage__buttons">
          <Button
            variant={table === 'Transactions' ? 'primary' : 'secondary'}
            className="MachinePage__btn"
            onClick={() => setTable('Transactions')}
          >
            Transactions
          </Button>
          <Button
            variant={table === 'Errors' ? 'primary' : 'secondary'}
            className="MachinePage__btn"
            onClick={() => setTable('Errors')}
          >
            Errors
          </Button>
          <Button
            variant={table === 'Logs' ? 'primary' : 'secondary'}
            className="MachinePage__btn"
            onClick={() => setTable('Logs')}
          >
            Logs
          </Button>
        </div>

        {table === 'Transactions' && <MachineInfoTable />}
        {table === 'Errors' && <MachineErrorTable />}
        {table === 'Logs' && <MachineLogTable />}
        {loading && <MyLoader />}
      </main>
    </div>
  );
};
