import { Link } from "react-router-dom";

export default function Logo({ isAuthenticated }) {
  return <Link to={isAuthenticated ? "/home" : "/"}>{/* logo.png */}</Link>;
}
