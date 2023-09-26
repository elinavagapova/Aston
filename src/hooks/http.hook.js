export function useHttp() {
  const request = async (
    url,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    const response = await fetch(url, { method, body, headers });

    if (!response.ok) {
      throw new Error(`Не удалось получить ${url}`);
    }

    const data = await response.json();
    return data;
  };

  return { request };
}
