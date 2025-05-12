import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import Home from './Home';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
     <div className={theme === 'dark' ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
       <Home />
      </div>
    </ThemeContext.Provider>
  );
}
