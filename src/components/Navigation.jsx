import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ThemeToggleButton from "./ThemeToggleButton";

function getLinkClassName({ isActive }) {
  return isActive ? "nav-link active" : "nav-link";
}

export default function Navigation() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="app-header">
      <div className="brand">Lab 3 Dashboard</div>

      <nav className="app-nav" aria-label="Main">
        <NavLink to="/" end className={getLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClassName}>
          About
        </NavLink>
        <NavLink to="/profile" className={getLinkClassName}>
          Profile
        </NavLink>
        <NavLink to="/dashboard" className={getLinkClassName}>
          Dashboard
        </NavLink>
      </nav>

      <div className="header-actions">
        <ThemeToggleButton />

        {isAuthenticated ? (
          <>
            <span className="user-pill">Hello, {user.name}</span>
            <button type="button" className="button button-secondary" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="button button-primary">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}
