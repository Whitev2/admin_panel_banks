import { useEffect } from 'react';

export const useScrollbarGutter = (loading) => {
  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [loading]);
};
