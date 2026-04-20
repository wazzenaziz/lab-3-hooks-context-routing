# Lab 3: Hooks, Context & Routing

## Student
- Name: Mohamed Aziz
- Date: April 20, 2026

## Project Summary
This project is a Mini Dashboard SPA built from scratch with React + Vite for Lab 3.
It combines hooks, context, routing, protected pages, and reusable custom hooks.

## Implemented Features
- `useEffect` side effects:
  - Document title sync (`TitleCounter`, page titles)
  - Window resize listener with cleanup (`WindowSize`)
  - Data fetching with loading/error/success states (`PostViewer`)
- Context API:
  - `AuthContext` with `login`, `logout`, and `useAuth`
  - `ThemeContext` with light/dark mode and `useTheme`
- React Router v6:
  - `/`, `/about`, `/profile`, `/login`, `/users/:id`, `/dashboard`, `/dashboard/items/:id`, `*`
  - Programmatic navigation with `useNavigate` in login flow
  - 404 page for unknown routes
  - Protected routes for dashboard paths
- Custom hooks:
  - `useFetch(url)` for reusable data loading logic
  - `useDocumentTitle(title)` for centralized title updates
  - `useToggle(initialValue)` for reusable boolean toggling
- Dashboard challenge:
  - Protected dashboard list view (first 10 items)
  - Protected dynamic item detail page
  - Top navigation with login/logout state and theme toggle

## Stretch Goals Completed
- Persisted theme in `localStorage`

## Known Issues
- Components using JSONPlaceholder (`PostViewer`, `PostList`) show an error if the external API is unavailable.

## How to Run
```bash
npm install
npm run dev
```

## Build Check
```bash
npm run build
```
