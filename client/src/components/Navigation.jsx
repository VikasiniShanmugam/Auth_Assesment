import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROLES } from "../constants/roles";

export default function Navigation() {
  const { user, logout } = useAuth();

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          {user && (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/user">User</Link>
              {(user.role === ROLES.MANAGER || user.role === ROLES.ADMIN) && (
                <Link to="/manager">Manager</Link>
              )}
              {user.role === ROLES.ADMIN && (
                <Link to="/admin">Admin</Link>
              )}
            </>
          )}
        </div>
        <div className="nav-links">
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <button onClick={logout} className="btn btn-secondary">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
