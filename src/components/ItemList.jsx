import { Link } from "react-router-dom";

export default function ItemList({ items, linkPrefix = "/dashboard/items" }) {
  if (!items.length) {
    return <p className="muted">No items to display.</p>;
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item-row">
          <div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
          <Link className="button button-secondary" to={`${linkPrefix}/${item.id}`}>
            View details
          </Link>
        </li>
      ))}
    </ul>
  );
}
