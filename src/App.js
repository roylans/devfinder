import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Search } from './components/Search'

import { ThemeContext } from './context/theme'

function App() {
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") === "dark" ? true : false)

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"))
  }, [darkTheme])

  const toggleTheme = () => {
    if (darkTheme === false) {
      localStorage.setItem("theme", "dark");
      setDarkTheme(true);
    } else {
      localStorage.setItem("theme", "light");
      setDarkTheme(false);
    }
  }


  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
    <div className="container">
      <Header/>
      <Search/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
