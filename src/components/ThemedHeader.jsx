import { useTheme } from "../contexts/ThemeContext";

export default function ThemedHeader({ children }) {
  const { theme } = useTheme();

  return <div className={`themed-header ${theme}`}>{children}</div>;
}
