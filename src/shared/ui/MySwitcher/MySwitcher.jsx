import { useState } from 'react';
import cn from 'classnames';
import './MySwitcher.scss';

export const MySwitcher = () => {
  const [status, setStatus] = useState(false);
  return (
    <div
      onClick={() => setStatus(!status)}
      className={cn('MySwitcher', {
        'MySwitcher--active': status,
      })}
    />
  );
};
