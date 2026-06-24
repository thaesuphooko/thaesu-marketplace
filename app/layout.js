'use client';
import { useThemeEngine } from '@/hooks/useThemeEngine';
import './globals.css';

export default function RootLayout({ children }) {
  const theme = useThemeEngine();

  const themeColors = {
    day: 'bg-white text-black',
    dawn: 'bg-orange-100 text-brown-900',
    night: 'bg-gray-900 text-white'
  };

  return (
    <html lang="en">
      <body className={`${themeColors[theme]} transition-colors duration-1000`}>
        {children}
      </body>
    </html>
  );
}
