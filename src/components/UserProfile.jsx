import { useAuth } from "../contexts/AuthContext";

export default function UserProfile() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <p>Please log in.</p>;
  }

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Status: Authenticated</p>
    </div>
  );
}
