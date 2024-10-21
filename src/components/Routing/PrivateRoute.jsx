import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuthenticated } from '../../redux/auth/selectors.js';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? children : <Navigate to="/welcome" />;
};
export default PrivateRoute;
