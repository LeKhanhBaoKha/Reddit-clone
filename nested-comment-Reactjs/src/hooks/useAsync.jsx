import { useCallback, useEffect, useState } from "react";

export function useAsync(func, dependencies = []) {
  const { execute, ...state } = useAsyncInternal(func, dependencies, true);
  useEffect(() => {
    execute();
  }, [execute]);

  return state;
}
export function useAsyncFn(func, dependencies = []) {
  return useAsyncInternal(func, dependencies, false);
}
export function useAsyncInternal(
  func,
  dependencies = [],
  initialLoading = false
) {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const execute = useCallback((...params) => {
    setLoading(true);
    return func(...params)
      .then((data) => {
        setError(undefined);
        setValue(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        setValue(undefined);
        return Promise.reject(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  return { loading, error, value, execute };
}
