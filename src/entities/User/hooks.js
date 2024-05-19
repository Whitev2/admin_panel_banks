import { useDispatch } from 'react-redux';
import { logout } from './store/userSlice';
import { useNavigate } from 'react-router-dom';

export const useLogoutUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem('access_token');
    dispatch(logout());
    navigate('/');
  };

  return logoutUser;
};
