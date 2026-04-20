import { useEffect, useState } from "react";

export default function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="card compact-card">
      <h3>Exercise 1.2: Window Size</h3>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </section>
  );
}
