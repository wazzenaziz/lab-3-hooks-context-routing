import { Link } from "react-router-dom";
import LoginPanel from "../components/LoginPanel";
import PostList from "../components/PostList";
import PostViewer from "../components/PostViewer";
import ThemeToggleButton from "../components/ThemeToggleButton";
import ThemedCard from "../components/ThemedCard";
import ThemedHeader from "../components/ThemedHeader";
import TitleCounter from "../components/TitleCounter";
import ToggleText from "../components/ToggleText";
import ToggleThemeButton from "../components/ToggleThemeButton";
import UserList from "../components/UserList";
import UserProfile from "../components/UserProfile";
import WindowSize from "../components/WindowSize";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function HomePage() {
  useDocumentTitle("Home | Lab 3 Dashboard");

  return (
    <div className="page-stack">
      <section className="card hero-card">
        <h1>Lab 3: Hooks, Context & Routing</h1>
        <p>
          This app implements all core requirements: useEffect patterns, Context-based auth/theme,
          React Router routes, protected pages, and reusable custom hooks.
        </p>
        <div className="button-row">
          <Link className="button button-primary" to="/dashboard">
            Open Dashboard
          </Link>
          <Link className="button button-secondary" to="/login">
            Go to Login
          </Link>
        </div>
      </section>

      <ThemedHeader>
        <h2>Exercise 2: Theme + Auth Context</h2>
        <div className="button-row">
          <LoginPanel />
          <ThemeToggleButton />
        </div>
      </ThemedHeader>

      <ThemedCard>
        <UserProfile />
      </ThemedCard>

      <section className="grid-two">
        <TitleCounter />
        <WindowSize />
      </section>

      <section className="grid-two">
        <PostViewer />
        <ToggleText />
      </section>

      <section className="grid-two">
        <ToggleThemeButton />
        <PostList />
      </section>

      <section className="grid-two">
        <UserList />
        <section className="card compact-card">
          <h3>Exercise 3.2: Dynamic User Routes</h3>
          <div className="button-row">
            <Link className="button button-secondary" to="/users/1">
              User 1
            </Link>
            <Link className="button button-secondary" to="/users/2">
              User 2
            </Link>
            <Link className="button button-secondary" to="/users/42">
              User 42
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
