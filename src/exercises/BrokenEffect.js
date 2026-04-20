/* eslint-disable react-hooks/exhaustive-deps, react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

// Exercise 1.4 starter file.
// Intentionally broken examples for students to inspect and fix.

export function MissingDependencyExample({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((result) => setUser(result));
  }, []); // userId is intentionally missing.

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}

export function OverlyBroadDependencyExample({ query }) {
  const [results, setResults] = useState([]);
  const options = { limit: 10 };

  useEffect(() => {
    fetch(`/api/search?q=${query}&limit=${options.limit}`)
      .then((response) => response.json())
      .then((result) => setResults(result));
  }, [query, options]); // options is recreated each render.

  return <p>Results: {results.length}</p>;
}

export function NoDependencyArrayLoopExample() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter((value) => value + 1);
  }); // no dependency array.

  return <p>Counter: {counter}</p>;
}
