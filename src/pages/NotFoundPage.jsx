import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFoundPage() {
  useDocumentTitle("404 Not Found | Lab 3 Dashboard");

  return (
    <section className="card page-card">
      <h1>404 - Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="button button-primary" to="/">
        Return Home
      </Link>
    </section>
  );
}
