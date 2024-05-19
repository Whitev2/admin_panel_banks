import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

import './MachinePage.scss';
import { MyLoader } from '../../../shared/ui/MyLoader/Myloader';
import { MachineErrorTable } from '../../../widgets/Tables/MachineErrorTable';
import { MachineInfoTable } from '../../../widgets/Tables/MachineInfoTable';
import { MachineLogTable } from '../../../widgets/Tables/MachineLogTable';

export const MachinePage = () => {
  const [table, setTable] = useState('Transactions');
  const { loading } = useSelector((state) => state.machine);

  return (
    <div className="MachinePage">
      <h1>Machine</h1>
      <header className="MachinePage__header">
        <div className="MachinePage__info">
          <p className="MachinePage__info-key">Transactions</p>
          <p className="MachinePage__info-value">1070</p>
        </div>
        <div className="MachinePage__info">
          <p className="MachinePage__info-key">Errors</p>
          <p className="MachinePage__info-value">12</p>
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

        {table === 'Transactions' && (
          <MachineInfoTable data={[1, 2, 3, 4, 5]} />
        )}
        {table === 'Errors' && <MachineErrorTable data={[1, 2, 3, 4, 5]} />}
        {table === 'Logs' && <MachineLogTable data={[1, 2, 3, 4, 5]} />}
        {loading && <MyLoader />}
      </main>
    </div>
  );
};
