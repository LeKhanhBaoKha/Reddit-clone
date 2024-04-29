import { useCallback, useState } from "react";

export function useAsync(func, dependencies = []) {}
export function useAsyncFn(func, dependencies = []) {}
export function useAsyncInternal(
  func,
  dependencies = [],
  initialLoading = false
) {
    const [loading, setLoading] =useState(initialLoading);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const execute = useCallback(())
}
