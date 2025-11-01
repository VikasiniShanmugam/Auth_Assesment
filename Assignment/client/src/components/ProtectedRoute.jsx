import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, roles }) {
  const location = useLocation();
  const { token, user } = useAuth();
  if (!token || !user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  if (roles && roles.length && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
}

export default ProtectedRoute;
