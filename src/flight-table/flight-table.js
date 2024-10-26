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
    const { checkboxReducer } = state
    // console.log(checkboxReducer)
    return checkboxReducer.flights
  })
  // const flights = [
  //   {
  //     key: 1,
  //     price: 13400,
  //     // Код авиакомпании (iata)
  //     carrier: 'AirLines',
  //     // Массив перелётов.
  //     // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  //     segments: [
  //       {
  //         // Код города (iata)
  //         origin: 'MOW',
  //         // Код города (iata)
  //         destination: 'HKT',
  //         // Дата и время вылета туда
  //         date: '10:45',
  //         // Массив кодов (iata) городов с пересадками
  //         stops: ['HKG', 'JNB'],
  //         // Общее время перелёта в минутах
  //         duration: 120,
  //       },
  //       {
  //         // Код города (iata)
  //         origin: 'HTK',
  //         // Код города (iata)
  //         destination: 'MOW',
  //         // Дата и время вылета обратно
  //         date: '11:20',
  //         // Массив кодов (iata) городов с пересадками
  //         stops: ['SDF', 'SFdD'],
  //         // Общее время перелёта в минутах
  //         duration: 200,
  //       },
  //     ],
  //   },
  //   {
  //     key: 2,
  //     price: 13400,
  //     // Код авиакомпании (iata)
  //     carrier: 'AirLines',
  //     // Массив перелётов.
  //     // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  //     segments: [
  //       {
  //         // Код города (iata)
  //         origin: 'MOW',
  //         // Код города (iata)
  //         destination: 'HKT',
  //         // Дата и время вылета туда
  //         date: '10:45',
  //         // Массив кодов (iata) городов с пересадками
  //         stops: ['HKG', 'JNB'],
  //         // Общее время перелёта в минутах
  //         duration: 120,
  //       },
  //       {
  //         // Код города (iata)
  //         origin: 'HTK',
  //         // Код города (iata)
  //         destination: 'MOW',
  //         // Дата и время вылета обратно
  //         date: '11:20',
  //         // Массив кодов (iata) городов с пересадками
  //         stops: ['SDF', 'SFdD'],
  //         // Общее время перелёта в минутах
  //         duration: 200,
  //       },
  //     ],
  //   },
  // ]
  // const flightList = flights.map((item) => {
  //   const { key, price, carrier, segments } = item
  //   console.log(carrier)
  //   return <FlightItem key={key} price={price} carrier={logoCarrier} segments={segments} />
  // })
  // console.log(flightId)
  // console.log('fligths', flights)
  // const flightList = flights.map((res) => <FlightItem key={uniqid()} props={res} />)
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
