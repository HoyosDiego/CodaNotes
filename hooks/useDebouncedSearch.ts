import { useEffect } from "react";

export function useDebouncedSearch<T>(
  callback: () => void,
  delay: number,
  dependency: T,
) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay, dependency]);
}
