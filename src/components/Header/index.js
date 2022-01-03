import { useState, useEffect } from 'react';
import style from './header.module.scss'

export function Header(props) {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false)

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"))
  }, [checked])

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <header className={ style.header }>
      <div className={ style.header__title }>DevFinder</div>
      <div className={ style.header__toggle }>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => toggleThemeChange()}
        />
      </div>
    </header>
  )
}

