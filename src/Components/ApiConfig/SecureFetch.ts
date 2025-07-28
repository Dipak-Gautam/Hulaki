interface SecureFetchOptions {
  headers?: Record<string, string>;
  body?: string;
  method: string;
  url: string;
}

const SecureFetch = async (data: SecureFetchOptions) => {
  if (data.method == "GET") {
    data.body = undefined;
  }

  const request = await fetch(data.url, {
    method: data.method,
    headers: {
      "Content-Type": "application/json",
      ...data.headers,
    },
    body: data.body || undefined,
  });
  return request;
};
export default SecureFetch;
