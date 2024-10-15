import classes from './offer-filter.module.scss'
function OfferFilter() {
  return (
    <div className={`${classes['offer-filter']} ${classes['flight-table__offer-filter']}`}>
      <button className={`${classes['offer-filter__item']} ${classes['offer-filter__item--cheapest']}`}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={`${classes['offer-filter__item']} ${classes['offer-filter__item--fastest']}`}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className={`${classes['offer-filter__item']} ${classes['offer-filter__item--optimal']}`}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

export default OfferFilter
