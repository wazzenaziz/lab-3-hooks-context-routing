export default function ItemDetail({ item }) {
  if (!item) {
    return null;
  }

  return (
    <article className="card">
      <h2>
        #{item.id}: {item.title}
      </h2>
      <p>{item.body}</p>
      <dl className="meta-grid">
        <div>
          <dt>Status</dt>
          <dd>{item.status}</dd>
        </div>
        <div>
          <dt>Priority</dt>
          <dd>{item.priority}</dd>
        </div>
        <div>
          <dt>Owner User ID</dt>
          <dd>{item.userId}</dd>
        </div>
        <div>
          <dt>Created</dt>
          <dd>{item.createdAt}</dd>
        </div>
      </dl>
    </article>
  );
}
