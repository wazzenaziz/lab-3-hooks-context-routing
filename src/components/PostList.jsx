import { useFetch } from "../hooks/useFetch";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

export default function PostList() {
  const { data, loading, error } = useFetch(POSTS_URL);

  return (
    <section className="card compact-card">
      <h3>Exercise 4.2: Post List via useFetch</h3>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && Array.isArray(data) && (
        <ul className="simple-list">
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
