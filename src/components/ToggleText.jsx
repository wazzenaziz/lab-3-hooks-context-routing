import { useToggle } from "../hooks/useToggle";

export default function ToggleText() {
  const [visible, toggleVisible] = useToggle(false);

  return (
    <section className="card compact-card">
      <h3>Exercise 4.1: Toggle Text</h3>
      <button type="button" className="button button-secondary" onClick={toggleVisible}>
        {visible ? "Hide" : "Show"} text
      </button>
      {visible && <p>This text is controlled by useToggle.</p>}
    </section>
  );
}
