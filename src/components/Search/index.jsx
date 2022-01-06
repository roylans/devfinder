import style from './search.module.scss'

export function Search(props) {
  return (
    <div className={style.search}>
      <div className={style.wrapper}>
        <div className={style.wrapper__input}>
          <input
            className={style.wrapper__input}
            type="text"
            placeholder='Search Github username...'
          />
        </div>
        <div className={style.wrapper__action}>
          <button className={style.wrapper__btn}>Search</button>
        </div>

      </div>
    </div>
  )
}