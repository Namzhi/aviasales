import { useDispatch } from 'react-redux'

import { cheapFlight, fastFlight, optimalFlight, findCheapest, findFastest, findOptimal } from '../redux/actions'

import classes from './offer-filter.module.scss'

function OfferFilter() {
  const offerButtons = document.querySelectorAll(`.${classes['offer-filter__item']}`)
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    // console.log([...e.target.classList])
    e.target.classList.toggle(classes['offer-filter__item--clicked'])
    const isClicked = [...e.target.classList].includes(classes['offer-filter__item--clicked'])
    const buttonName = e.target.textContent
    dispatch(optimalFlight(false))
    dispatch(fastFlight(false))
    dispatch(cheapFlight(false))
    if (isClicked) {
      offerButtons.forEach((el) => {
        el.classList.remove(`${classes['offer-filter__item--clicked']}`)
      })
      e.target.classList.toggle(classes['offer-filter__item--clicked'])

      switch (buttonName) {
        case 'САМЫЙ ДЕШЕВЫЙ': {
          dispatch(findCheapest())
          return dispatch(cheapFlight(isClicked))
        }
        case 'САМЫЙ БЫСТРЫЙ':
          dispatch(findFastest())
          return dispatch(fastFlight(isClicked))
        case 'ОПТИМАЛЬНЫЙ':
          dispatch(findOptimal())
          return dispatch(optimalFlight(isClicked))
      }
    }
  }
  return (
    <div className={`${classes['offer-filter']} ${classes['flight-table__offer-filter']}`}>
      <button
        className={`${classes['offer-filter__item']} ${classes['offer-filter__item--cheapest']}`}
        onClick={handleFilter}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`${classes['offer-filter__item']} ${classes['offer-filter__item--fastest']}`}
        onClick={handleFilter}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`${classes['offer-filter__item']} ${classes['offer-filter__item--optimal']}`}
        onClick={handleFilter}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

export default OfferFilter
