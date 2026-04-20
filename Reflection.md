# Reflection - Lab 3

## 1. Hooks
### Why does `useEffect` sometimes cause infinite loops?
`useEffect` can loop when it updates state and either has no dependency array or includes unstable values that change every render.
Each state update triggers another render, which runs the effect again.

### How do dependency arrays help?
Dependency arrays tell React when the effect should run.
- `[]`: run once on mount
- `[value]`: run when `value` changes
- no array: run after every render
This prevents unnecessary effect runs and accidental loops.

## 2. Context
### How did Context simplify passing auth/theme data?
Context removed prop drilling for auth and theme state.
Any component can read `useAuth` or `useTheme` directly, including nested pages and shared layout components.

### What are downsides of using Context everywhere?
Putting too much state in Context can cause broad re-renders and make ownership unclear.
Not every piece of state should be global; local component state is often simpler.

## 3. Routing
### How does React Router differ from traditional multi-page apps?
React Router updates views client-side without full page reloads.
Traditional multi-page apps request a new HTML page from the server for each navigation.

### How does `useNavigate` change control flow?
`useNavigate` allows redirecting after logic runs (for example: login success), instead of relying only on links.
That makes navigation part of event handlers and application flow.

## 4. Custom Hooks
### How did `useFetch` reduce duplication?
`useFetch` centralized loading/error/data handling so each component only renders states and data.
It removed repeated fetch boilerplate from multiple components.

### Where else could you use `useDocumentTitle`?
It can be used in any route/page component, modal workflows, and multi-step forms to reflect current context in the browser tab.
