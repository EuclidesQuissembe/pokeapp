import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, defaultState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return defaultState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(defaultState));
  }, [key, defaultState]);

  return [state, setState];
}

export default usePersistedState;
