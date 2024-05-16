import { Navigate } from 'react-router-dom';

export const AuthRequired = ({ children }) => {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};
