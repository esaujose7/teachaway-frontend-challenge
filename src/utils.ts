import { createContext, useContext } from 'react';

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

// https://www.carlrippon.com/react-context-with-typescript-p4/
export function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export function getImgurImageJPG(id: string) {
  return `https://i.imgur.com/${id}.jpg`;
}
