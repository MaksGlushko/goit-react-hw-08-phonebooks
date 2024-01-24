import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggenIn } = useAuth();

  return isLoggenIn ? <Navigate to={redirectTo} /> : Component;
};