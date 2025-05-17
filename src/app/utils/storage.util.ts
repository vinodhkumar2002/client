export const isBrowser = typeof window !== 'undefined';

export const getFromLocalStorage = (key: string): string | null => {
  if (isBrowser && localStorage) {
    return localStorage.getItem(key);
  }
  return null;
};

export const setToLocalStorage = (key: string, value: string): void => {
  if (isBrowser && localStorage) {
    localStorage.setItem(key, value);
  }
};

export const removeFromLocalStorage = (key: string): void => {
  if (isBrowser && localStorage) {
    localStorage.removeItem(key);
  }
};
