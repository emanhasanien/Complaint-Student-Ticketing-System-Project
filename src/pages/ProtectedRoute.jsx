
import { Navigate } from "react-router-dom";
import AuthService from "../AuthService";
import StudentNavbar from "../UI-Components/StudentNavbar";
import AdminNavbar from "./Admin/AdminNavbar";


const ProtectedRoute = ({ children, allowedRoles }) => {
  const userRole = AuthService.getRole();

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
