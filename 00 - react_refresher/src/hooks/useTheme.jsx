import { useState } from 'react';

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleTheme];
}
