import { useFetch } from "../hooks/useFetch";

const SINGLE_POST_URL = "https://jsonplaceholder.typicode.com/posts/1";

export default function PostViewer() {
  const { data, loading, error } = useFetch(SINGLE_POST_URL);

  return (
    <section className="card compact-card">
      <h3>Exercise 1.3: Post Viewer</h3>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && data && (
        <article>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </article>
      )}
    </section>
  );
}
