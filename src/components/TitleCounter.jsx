import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function TitleCounter() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Count: ${count}`);

  return (
    <section className="card compact-card">
      <h3>Exercise 1.1: Title Counter</h3>
      <p>Current count: {count}</p>
      <div className="button-row">
        <button type="button" className="button button-primary" onClick={() => setCount((value) => value + 1)}>
          +
        </button>
        <button type="button" className="button button-secondary" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}
