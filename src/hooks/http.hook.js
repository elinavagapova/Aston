import { useState, useCallback } from 'react';

export function useHttp() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
      setLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Не удалось получить ${url}`);
        }

        const data = await response.json();
        setLoading(false);
        return data;
      } catch (err) {
        setLoading(false);
        setError(err.message);
        throw err;
      }
    },
    []
  );

  return { error, loading, request };
}
