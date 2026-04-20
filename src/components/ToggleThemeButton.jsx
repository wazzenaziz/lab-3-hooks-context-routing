import { useToggle } from "../hooks/useToggle";

export default function ToggleThemeButton() {
  const [isDarkPreview, togglePreviewTheme] = useToggle(false);

  return (
    <section className="card compact-card">
      <h3>Exercise 4.1: Toggle Theme Button</h3>
      <button type="button" className="button button-secondary" onClick={togglePreviewTheme}>
        Toggle preview theme
      </button>
      <p className={isDarkPreview ? "preview-dark" : "preview-light"}>
        Preview mode: {isDarkPreview ? "Dark" : "Light"}
      </p>
    </section>
  );
}
