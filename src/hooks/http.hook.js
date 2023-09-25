export function useHttp() {
  const request = async (
    url,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    // eslint-disable-next-line
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Не удалось получить ${url}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };

  return { request };
}
