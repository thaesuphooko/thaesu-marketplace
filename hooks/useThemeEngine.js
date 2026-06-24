'use client';

import { useState, useEffect } from 'react';

export const useThemeEngine = () => {
  const [theme, setTheme] = useState('day');
  
  useEffect(() => {
    // Theme logic here
  }, []);
  
  return { theme, setTheme };
};
