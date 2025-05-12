import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Current Theme: {theme}</h1>
      <button 
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
     className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
}
