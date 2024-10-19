import { selectIsAuthenticated } from "";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return !isAuthenticated ? children : <Navigate to="/home" />;
};

export default PublicRoute;
