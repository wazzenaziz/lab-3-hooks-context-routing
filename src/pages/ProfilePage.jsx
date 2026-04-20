import { Link } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import { useAuth } from "../contexts/AuthContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ProfilePage() {
  const { isAuthenticated } = useAuth();

  useDocumentTitle("Profile | Lab 3 Dashboard");

  return (
    <section className="card page-card">
      <h1>Profile Page</h1>
      <UserProfile />
      {!isAuthenticated && (
        <p>
          You can authenticate on the <Link to="/login">Login page</Link>.
        </p>
      )}
    </section>
  );
}
