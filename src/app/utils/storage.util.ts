export const isBrowser = typeof window !== 'undefined';

export const getFromLocalStorage = (key: string): string | null => {
  if (!isBrowser) {
    console.warn(`getFromLocalStorage: Attempted to access '${key}' in a server environment.`);
    return null;
  }
  return localStorage.getItem(key);
};

export const setToLocalStorage = (key: string, value: string): void => {
  if (!isBrowser) {
    console.warn(`setToLocalStorage: Attempted to set '${key}' in a server environment.`);
    return;
  }
  localStorage.setItem(key, value);
};

export const removeFromLocalStorage = (key: string): void => {
  if (!isBrowser) {
    console.warn(`removeFromLocalStorage: Attempted to remove '${key}' in a server environment.`);
    return;
  }
  localStorage.removeItem(key);
};
