import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { flightsLoad, flightsCheckbox } from '../redux/actions'
import OfferFilter from '../offer-filter'
import FlightItem from '../flight-item'
import Spin from '../Spin'

import classes from './flight-table.module.scss'
function FlightTable(props) {
  const dispatch = useDispatch()

  const [ticketsNum, setTicketsNum] = useState(5)
  const checkbox = useSelector((state) => {
    const { checkboxReducer } = state
    return checkboxReducer.checkbox
  })
  const offer = useSelector((state) => {
    const { sortReducer } = state
    const { isCheapClicked, isFastClicked, isOptimalClicked } = sortReducer
    if (isCheapClicked) {
      return 'isCheapClicked'
    }
    if (isFastClicked) {
      return 'isFastClicked'
    }
    if (isOptimalClicked) {
      return 'isOptimalClicked'
    }
  })
  const flights = useSelector((state) => {
    const { sortReducer } = state
    if (offer) {
      return sortReducer.flightsOptions
    } else if (Object.values(checkbox).every((el) => el === false) && !offer) {
      return sortReducer.flights
    } else if (sortReducer.flightsCheckbox) {
      return sortReducer.flightsCheckbox
    } else {
      return sortReducer.flights
    }
  })
  const error = useSelector((state) => state.appReducer.error)
  console.log('error', error)
  useEffect(() => {
    dispatch(flightsLoad())
    dispatch(flightsCheckbox(checkbox))
  }, [checkbox, offer])

  const handleShowMore = () => {
    setTicketsNum(ticketsNum + 5)
  }
  console.log('flights', flights)
  const fl = flights.slice(0, ticketsNum)
  return (
    <div className={classes['flight-table__wrapper']}>
      <OfferFilter />
      <Spin />
      {error && <div className={classes['error-message']}>{error}</div>}
      {fl.map((res, index) => (
        <FlightItem key={index} props={res} />
      ))}
      {/*<FlightItem props = */}
      <button className={classes['flight-table__button']} onClick={handleShowMore}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
export default FlightTable
