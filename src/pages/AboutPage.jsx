import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function AboutPage() {
  useDocumentTitle("About | Lab 3 Dashboard");

  return (
    <section className="card page-card">
      <h1>About This Lab</h1>
      <p>
        This page demonstrates static routing with React Router and page-specific document titles via
        the custom useDocumentTitle hook.
      </p>
      <ul className="simple-list">
        <li>Hooks: useState, useEffect, custom hooks</li>
        <li>Context: Auth and Theme providers</li>
        <li>Routing: public pages, dynamic routes, protected routes, and 404 handling</li>
      </ul>
    </section>
  );
}
