import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { useAuth } from "../contexts/AuthContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useFetch } from "../hooks/useFetch";

export default function DashboardPage() {
  const { user } = useAuth();
  const { data, loading, error } = useFetch("/data/items.json");

  useDocumentTitle("Dashboard | Lab 3 Dashboard");

  const items = Array.isArray(data) ? data.slice(0, 10) : [];

  return (
    <section className="page-stack">
      <section className="card page-card">
        <h1>Dashboard</h1>
        <p>Welcome, {user.name}. These are the first 10 items loaded with useFetch.</p>
        <div className="button-row">
          <ThemeToggleButton />
          <Link className="button button-secondary" to="/profile">
            Open Profile
          </Link>
        </div>
      </section>

      {loading && <p>Loading dashboard items...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && <ItemList items={items} />}
    </section>
  );
}
