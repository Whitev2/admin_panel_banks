import { useState } from 'react';
import cn from 'classnames';
import './MySwitcher.scss';
import { machineAPI } from '../../../entities/Machine';

export const MySwitcher = ({ started, machineStatus, id }) => {
  const [status, setStatus] = useState(started);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setError('');
    setLoading(true);
    machineAPI
      .updateState({
        machine_id: id,
        started: !status,
      })
      .then((res) => setStatus(res.started))
      .catch((e) => {
        setError('Error');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={loading ? 'btn-wrapper' : 'btn-wrapper--disabled'}>
      <div
        onClick={handleClick}
        style={{
          backgroundColor: machineStatus === 'error' ? 'red' : '',
        }}
        className={cn('MySwitcher', {
          'MySwitcher--active': status,
        })}
      />
      {error && <p className="MySwitcher__error">{error}</p>}
    </div>
  );
};
