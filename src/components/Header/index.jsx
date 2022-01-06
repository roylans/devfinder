import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'
import style from './header.module.scss'

export function Header(props) {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)
  return (
    <header className={style.header}>
      <div className={style.header__title}>DevFinder</div>
      <div className={style.header__toggle}>
        <button
          className={`${style.modeButton} ${darkTheme ? style.modeButton__light : style.modeButton__dark}`}
          onClick={() => toggleTheme()}
        ></button>
      </div>
    </header >
  )
}

