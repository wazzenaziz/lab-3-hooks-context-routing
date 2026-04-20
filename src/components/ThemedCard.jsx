import { useTheme } from "../contexts/ThemeContext";

export default function ThemedCard({ children }) {
  const { theme } = useTheme();

  return <section className={`card themed-card ${theme}`}>{children}</section>;
}
