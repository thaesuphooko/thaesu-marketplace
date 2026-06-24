import { useState, useEffect } from 'react';
export const useThemeEngine = () => {
  const [theme, setTheme] = useState('day');
  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      if (hour >= 18 || hour < 5) setTheme('night');
      else if (hour >= 5 && hour < 10) setTheme('dawn');
      else setTheme('day');
    };
    updateTheme();
    const interval = setInterval(updateTheme, 60000);
    return () => clearInterval(interval);
  }, []);
  return theme;
};
