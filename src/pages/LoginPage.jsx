import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function LoginPage() {
  const { isAuthenticated, login, user } = useAuth();
  const [name, setName] = useState("Alice");
  const navigate = useNavigate();
  const location = useLocation();

  useDocumentTitle("Login | Lab 3 Dashboard");

  const destination = location.state?.from?.pathname || "/dashboard";

  const handleLogin = () => {
    login({ name: name.trim() || "Alice" });
    navigate(destination, { replace: true });
  };

  if (isAuthenticated) {
    return (
      <section className="card page-card">
        <h1>Already Logged In</h1>
        <p>You are currently authenticated as {user.name}.</p>
        <div className="button-row">
          <Link className="button button-primary" to="/dashboard">
            Go to Dashboard
          </Link>
          <Link className="button button-secondary" to="/">
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="card page-card">
      <h1>Fake Login (Exercise 3.3)</h1>
      <p>This login is state-only and uses AuthContext.</p>

      <label className="field-label" htmlFor="username">
        Display name
      </label>
      <input
        id="username"
        className="input"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <div className="button-row">
        <button type="button" className="button button-primary" onClick={handleLogin}>
          Login and Redirect
        </button>
        <Link className="button button-secondary" to="/">
          Cancel
        </Link>
      </div>
    </section>
  );
}
