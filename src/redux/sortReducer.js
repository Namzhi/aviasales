import { FLIGHT_ID_LOAD, FLIGHTS_LOAD } from './types'
const initialState = {
  id: null,
  flights: [
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
  ],
}

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_ID_LOAD: {
      // console.log(action.data)
      const searchId = action.id
      // console.log(action.data.searchId)
      return {
        ...state,
        id: searchId,
      }
    }
    case FLIGHTS_LOAD: {
      // console.log('res', action)
      const flightsNew = action.flights.tickets.map((res) => {
        // console.log('res', res)
        return {
          // key: res,
          // key: uniqid(),
          price: res.price,
          // Код авиакомпании (iata)
          carrier: res.carrier,
          // Массив перелётов.
          // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
          segments: res.segments,

          // id: res,
        }
      })
      // console.log('resFlight', flightsNew)
      return {
        ...state,
        flights: flightsNew,
      }
    }
    default:
      return state
  }
}
