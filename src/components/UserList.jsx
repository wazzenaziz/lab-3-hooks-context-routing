import { useFetch } from "../hooks/useFetch";

export default function UserList() {
  const { data, loading, error } = useFetch("/data/users.json");

  return (
    <section className="card compact-card">
      <h3>Exercise 4.2: User List (Local JSON)</h3>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && Array.isArray(data) && (
        <ul className="simple-list">
          {data.map((user) => (
            <li key={user.id}>
              {user.name} ({user.role})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
