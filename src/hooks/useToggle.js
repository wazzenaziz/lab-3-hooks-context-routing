import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(Boolean(initialValue));

  const toggle = () => {
    setValue((previousValue) => !previousValue);
  };

  return [value, toggle];
}
