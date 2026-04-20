import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" className="button button-secondary" onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}
