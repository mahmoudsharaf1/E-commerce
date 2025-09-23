import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import { colors } from '@theme';
import {STORAGE_KEYS} from '@constants';
import {StorageUtils} from '@utils/storage';

const imgs = {
  dark: {},
  light: {},
};

const icons = {
  dark: {},
  light: {},
};

type ThemeType = 'dark' | 'light';

type ThemeContextType = {
  theme: ThemeType;
  themeColors: typeof colors.dark | typeof colors.light;
  themeImgs: typeof imgs.dark | typeof imgs.light;
  themeIcons: typeof icons.dark | typeof icons.light;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  themeColors: colors.light,
  themeImgs: imgs.light,
  themeIcons: icons.light,
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const systemColorScheme = 'light'; // System detected theme
  // const systemColorScheme = 'dark'; // System detected theme
  const [theme, setTheme] = useState<ThemeType>(systemColorScheme);

  const toggleTheme = async () => {
    StorageUtils.set(STORAGE_KEYS.THEME, theme === 'light' ? 'dark' : 'light');
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeColors = useMemo(() => {
    return theme === 'dark' ? colors.dark : colors.light;
  }, [theme]);

  const themeImgs = useMemo(() => {
    return theme === 'dark' ? imgs.dark : imgs.light;
  }, [theme]);

  const themeIcons = useMemo(() => {
    return theme === 'dark' ? icons.dark : icons.light;
  }, [theme]);

  useEffect(() => {
    setTheme(systemColorScheme); // Update theme when system changes
  }, [systemColorScheme]);

  const checkStorageValue = async () => {
    const storageVal = await StorageUtils.get(STORAGE_KEYS.THEME);
    if (storageVal) {
      setTheme(storageVal as ThemeType);
    }
  };

  useEffect(() => {
    checkStorageValue();
  }, []);

  return (
    <ThemeContext.Provider
      value={{theme, themeColors, themeImgs, themeIcons, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export {ThemeContext, ThemeProvider, useTheme};
