import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuthenticated } from '../../redux/auth/selectors.js';

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
