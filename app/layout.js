import { useThemeEngine } from '../hooks/useThemeEngine';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
