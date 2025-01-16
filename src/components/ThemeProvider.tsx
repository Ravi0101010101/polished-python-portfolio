import { createContext, useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const updateTheme = () => {
      const hour = dayjs().hour();
      const newTheme = hour >= 6 && hour < 18 ? 'light' : 'dark';
      setTheme(newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};