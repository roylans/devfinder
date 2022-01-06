import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'
import style from './search.module.scss'

export function Search(props) {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <div className={style.search}>
      <div className={style.wrapper}>
        <div className={`${style.wrapper__input} ${!darkTheme ? style.wrapper__input_dark : style.wrapper__input_light}`}>
          <input
            type="text"
            placeholder='Search Github username...'
          />
        </div>
        <div className={style.wrapper__action}>
          <button className={style.wrapper__btn}>Search</button>
        </div>

      </div>
    </div >
  )
}