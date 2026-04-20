import { Link, useParams } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const MOCK_NAMES = {
  1: "Leanne Graham",
  2: "Ervin Howell",
  3: "Clementine Bauch",
};

export default function UserDetailPage() {
  const { id } = useParams();
  const mockName = MOCK_NAMES[id] || `User ${id}`;

  useDocumentTitle(`User ${id} | Lab 3 Dashboard`);

  return (
    <section className="card page-card">
      <h1>User Detail</h1>
      <p>User ID: {id}</p>
      <p>Mock Name: {mockName}</p>
      <Link className="button button-secondary" to="/">
        Back Home
      </Link>
    </section>
  );
}
