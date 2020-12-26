export async function api<T>(url: string, options: RequestInit | undefined = undefined): Promise<T> {
  try {
    const request = await fetch(process.env.REACT_APP_IMGUR_BASE_URL.concat(url), {
      ...options,
      headers: { Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}` }
    })

    if (!request.ok) {
      throw new Error(`${request.status} | ${request.statusText}`);
    }

    return request.json() as Promise<T>;
  } catch(e) {
    throw e; // Re throw so consumer can catch it
  }
}
