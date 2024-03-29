import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = window.localStorage.getItem(key);

    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem(key);
    const parsedStoredValue = storedValue !== null ? JSON.parse(storedValue) : null;

    if (JSON.stringify(parsedStoredValue) !== JSON.stringify(value)) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as [T, typeof setValue];
}
