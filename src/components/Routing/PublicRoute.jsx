import { selectIsAuthenticated } from '../../redux/auth/selectors.js';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
