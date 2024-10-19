// import { selectIsAuthenticated } from "";
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = false;
  return isAuthenticated ? <Navigate to='/home' /> : children;
};

export default PublicRoute;
