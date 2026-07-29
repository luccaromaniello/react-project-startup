import { useCallback, useState } from "react";

/**
 * A small custom hook for boolean state.
 * Works like `useState`, but instead of exposing a setter,
 * it returns a function that simply flips the value.
 */
const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle];
};

export default useToggle;
