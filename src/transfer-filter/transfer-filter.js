import classes from './transfer-filter.module.scss'
function TransferFilter() {
  return (
    <div className={classes['transfer-filter__wrapper']}>
      <h1>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <label className={classes['transfer-filter__container']}>
        Все
        <input
          type="checkbox"
          // checked="checked"
        />
        <span className={classes['checkmark']}></span>
      </label>
      <label className={classes['transfer-filter__container']}>
        Без пересадок
        <input type="checkbox" />
        <span className={classes['checkmark']}></span>
      </label>
      <label className={classes['transfer-filter__container']}>
        1 пересадка
        <input type="checkbox" />
        <span className={classes['checkmark']}></span>
      </label>
      <label className={classes['transfer-filter__container']}>
        2 пересадки
        <input type="checkbox" />
        <span className={classes['checkmark']}></span>
      </label>
      <label className={classes['transfer-filter__container']}>
        3 пересадки
        <input type="checkbox" />
        <span className={classes['checkmark']}></span>
      </label>
    </div>
  )
}

export default TransferFilter
