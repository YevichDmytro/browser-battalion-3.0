// import { selectIsAuthenticated } from "";
// import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to='/welcome' />;
};
export default PrivateRoute;
