import {
  FLIGHT_ID_LOAD,
  FLIGHTS_LOAD,
  CHEAPEST,
  FASTEST,
  OPTIMAL,
  FIND_CHEAPEST,
  FIND_FASTEST,
  FIND_OPTIMAL,
  FLIGHTS_CHECKBOX,
} from './types'

const initialState = {
  id: null,
  flightCheapest: null,
  flightFastest: null,
  flightOptimal: null,
  // flightsCheckbox: [],
  isCheapClicked: false,
  isFastClicked: false,
  isOptimalClicked: false,
  flights: [],
}

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_ID_LOAD: {
      const searchId = action.id
      return {
        ...state,
        id: searchId,
      }
    }
    case FLIGHTS_LOAD: {
      const flightsNew = action.flights.tickets.map((res) => {
        return {
          price: res.price,
          carrier: res.carrier,
          carrierImg: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg',
          segments: res.segments,
        }
      })
      return {
        ...state,
        flights: flightsNew,
      }
    }
    case CHEAPEST: {
      return {
        ...state,
        isCheapClicked: action.isCheapClicked,
      }
    }
    case FASTEST: {
      return {
        ...state,
        isFastClicked: action.isFastClicked,
      }
    }
    case OPTIMAL: {
      return {
        ...state,
        isOptimalClicked: action.isOptimalClicked,
      }
    }
    case FIND_CHEAPEST: {
      let flights = state.flights
      if (state.flightsCheckbox.length !== 0) {
        flights = state.flightsCheckbox
      }
      const cheapArray = flights.toSorted((a, b) => a.price - b.price)
      console.log(flights, cheapArray, 'sort')

      return {
        ...state,
        flightsFilter: cheapArray,
        flightsOptions: cheapArray,
      }
    }
    case FIND_FASTEST: {
      let flights = state.flights
      if (state.flightsCheckbox.length !== 0) {
        flights = state.flightsCheckbox
      }
      const cheapArray = flights.toSorted((a, b) => a.price - b.price)
      const fastArray = flights.toSorted((a, b) => a.segments[0].duration - b.segments[0].duration)

      return {
        ...state,
        flightsFilter: fastArray,
        flightsOptions: cheapArray,
      }
    }
    case FIND_OPTIMAL: {
      let flights = state.flights
      if (state.flightsCheckbox.length !== 0) {
        console.log(state.flightsCheckbox, 234234)
        flights = state.flightsCheckbox
      }

      const optimalArray = flights.toSorted(
        (a, b) => (a.price - b.price) * (a.segments[0].duration - b.segments[0].duration)
      )

      return {
        ...state,
        flightsFilter: optimalArray,
        flightsOptions: optimalArray,
      }
    }
    case FLIGHTS_CHECKBOX: {
      const checkbox = action.checkbox
      let flights = state.flights
      if (state.flightsFilter) {
        flights = state.flightsFilter
      }
      if (!state.isCheapClicked && !state.isFastClicked && !state.isOptimalClicked) {
        flights = state.flights
      }
      if (checkbox.allChecked) {
        if (state.flightsFilter) {
          return { ...state, flightsCheckbox: state.flightsFilter, flightsOptions: state.flightsFilter }
        }
        return { ...state, flightsCheckbox: flights, flightsOptions: flights }
      }
      const stops = Object.keys(checkbox).map((el) =>
        !checkbox[el]
          ? null
          : el === 'withoutTransfers'
            ? 0
            : el === 'oneTransfer'
              ? 1
              : el === 'twoTransfer'
                ? 2
                : el === 'threeTransfer'
                  ? 3
                  : -1
      )
      if (Object.values(checkbox).every((el) => el === false)) {
        return { ...state, flightsCheckbox: flights, flightsOptions: flights }
      }
      const flightsCheckbox = flights.filter((res) => {
        if (stops.some((el) => el === res.segments[0].stops.length)) {
          return res
        }
      })
      console.log('456', flightsCheckbox, flights)
      return {
        ...state,
        flightsCheckbox: flightsCheckbox,
        flightsOptions: flightsCheckbox,
      }
    }
    default:
      return state
  }
}
