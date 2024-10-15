import OfferFilter from '../offer-filter'
import FlightItem from '../flight-item'
import logoCarrier from '../images/S7 Logo.png'

import classes from './flight-table.module.scss'
function FlightTable() {
  const flights = [
    {
      key: 1,
      price: 13400,
      // Код авиакомпании (iata)
      carrier: 'AirLines',
      // Массив перелётов.
      // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
      segments: [
        {
          // Код города (iata)
          origin: 'MOW',
          // Код города (iata)
          destination: 'HKT',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 120,
        },
        {
          // Код города (iata)
          origin: 'HTK',
          // Код города (iata)
          destination: 'MOW',
          // Дата и время вылета обратно
          date: '11:20',
          // Массив кодов (iata) городов с пересадками
          stops: ['SDF', 'SFdD'],
          // Общее время перелёта в минутах
          duration: 200,
        },
      ],
    },
    {
      key: 2,
      price: 13400,
      // Код авиакомпании (iata)
      carrier: 'AirLines',
      // Массив перелётов.
      // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
      segments: [
        {
          // Код города (iata)
          origin: 'MOW',
          // Код города (iata)
          destination: 'HKT',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 120,
        },
        {
          // Код города (iata)
          origin: 'HTK',
          // Код города (iata)
          destination: 'MOW',
          // Дата и время вылета обратно
          date: '11:20',
          // Массив кодов (iata) городов с пересадками
          stops: ['SDF', 'SFdD'],
          // Общее время перелёта в минутах
          duration: 200,
        },
      ],
    },
  ]
  const flightList = flights.map((item) => {
    const { key, price, carrier, segments } = item
    console.log(carrier)
    return <FlightItem key={key} price={price} carrier={logoCarrier} segments={segments} />
  })
  return (
    <div className={classes['flight-table__wrapper']}>
      <OfferFilter />
      {flightList}
      <button className={classes['flight-table__button']}>Показать еще 5 билетов!</button>
    </div>
  )
}
export default FlightTable
