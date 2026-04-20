import { Link, useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useFetch } from "../hooks/useFetch";

export default function ItemDetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch("/data/items.json");

  const item = Array.isArray(data)
    ? data.find((entry) => String(entry.id) === String(id))
    : null;

  useDocumentTitle(item ? `Item ${item.id} | Dashboard` : `Item ${id} | Dashboard`);

  return (
    <section className="page-stack">
      <section className="card page-card">
        <h1>Dashboard Item Detail</h1>
        <Link className="button button-secondary" to="/dashboard">
          Back to Dashboard
        </Link>
      </section>

      {loading && <p>Loading item details...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && !item && <p className="error">Item with ID {id} was not found.</p>}
      {!loading && !error && item && <ItemDetail item={item} />}
    </section>
  );
}
