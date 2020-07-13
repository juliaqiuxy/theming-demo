import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useMemo,
} from 'react';

import {
  setCookie, parseCookies, destroyCookie, BASE_COOKIE_OPTIONS,
} from './cookies';

const context = createContext();

export const getThemePreference = (ctx) => parseCookies(ctx, BASE_COOKIE_OPTIONS).theme;

export const ThemeProvider = ({ children, ...props }) => {
  const [preferredTheme, setPreferredTheme] = useState(
    () => props.preferredTheme,
  );

  const setPreferredThemeWithSideEffects = useCallback((preference) => {
    if (preference === preferredTheme) {
      return;
    }

    if (preferredTheme && preference) {
      document.body.classList.replace(preferredTheme, preference);
    } else if (preference) {
      document.body.classList.add(preference);
    } else if (preferredTheme) {
      document.body.classList.remove(preferredTheme);
    }

    if (preference) {
      setCookie(null, 'theme', preference, BASE_COOKIE_OPTIONS);
    } else {
      destroyCookie(null, 'theme', BASE_COOKIE_OPTIONS);
    }

    setPreferredTheme(preference);
  }, [preferredTheme]);

  const contextValue = useMemo(() => [
    preferredTheme, setPreferredThemeWithSideEffects,
  ], [preferredTheme, setPreferredThemeWithSideEffects]);

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  );
};

const useTheme = () => useContext(context);

export default useTheme;
