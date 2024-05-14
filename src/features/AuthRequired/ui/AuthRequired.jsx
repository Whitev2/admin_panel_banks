import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const AuthRequired = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
