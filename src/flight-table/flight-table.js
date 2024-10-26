import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'

// import {flightsLoad} from '../redux/actions'
import { flightsLoad, flightIdLoad } from '../redux/actions'
import OfferFilter from '../offer-filter'
import FlightItem from '../flight-item'
import logoCarrier from '../images/S7 Logo.png'

import classes from './flight-table.module.scss'
function FlightTable(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(flightsLoad())
    // console.log(123)
  }, [])

  const flights = useSelector((state) => {
    const { sortReducer } = state
    // console.log(checkboxReducer)
    return sortReducer.flights
  })

  const fl = flights.slice(0, 2)
  return (
    <div className={classes['flight-table__wrapper']}>
      <OfferFilter />
      {fl.map(
        (res) => (
          <FlightItem key={uniqid()} props={res} />
        )
        // console.log(res)
      )}
      {/*<FlightItem props = */}
      <button className={classes['flight-table__button']}>Показать еще 5 билетов!</button>
    </div>
  )
}
export default FlightTable
