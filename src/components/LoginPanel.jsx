import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPanel() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="login-panel">
      {isAuthenticated ? (
        <>
          <span>Logged in as {user.name}</span>
          <button type="button" className="button button-secondary" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <Link className="button button-primary" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}
