import {
  CHECK,
  FLIGHTS_LOAD,
  CHEAPEST,
  FASTEST,
  OPTIMAL,
  FLIGHTS_CHECKBOX,
  FIND_CHEAPEST,
  FIND_FASTEST,
  FIND_OPTIMAL,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from './types'

export function check(checkbox) {
  return {
    type: CHECK,
    checkbox,
  }
}

export function flightsLoad() {
  return async function (dispatch) {
    try {
      dispatch(loaderOn())

      const responseId = await fetch('https://aviasales-test-api.kata.academy/search')
      const jsonDataId = await responseId.json()
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${jsonDataId.searchId}`)
      const jsonData = await response.json()
      dispatch({
        type: FLIGHTS_LOAD,
        flights: jsonData,
      })
      dispatch(loaderOff())
      dispatch(errorOff())
    } catch {
      dispatch(errorOn('Ошибка при получении данных с сервера'))
      dispatch(loaderOff())
    }
  }
}
export function cheapFlight(isClicked) {
  return {
    type: CHEAPEST,
    isCheapClicked: isClicked,
  }
}
export function fastFlight(isClicked) {
  return {
    type: FASTEST,
    isFastClicked: isClicked,
  }
}
export function optimalFlight(isClicked) {
  return {
    type: OPTIMAL,
    isOptimalClicked: isClicked,
  }
}
export function flightsCheckbox(checkbox) {
  return {
    type: FLIGHTS_CHECKBOX,
    checkbox: checkbox,
  }
}
export function findCheapest() {
  return {
    type: FIND_CHEAPEST,
  }
}
export function findFastest() {
  return {
    type: FIND_FASTEST,
  }
}
export function findOptimal() {
  return {
    type: FIND_OPTIMAL,
  }
}
export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  }
}
export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  }
}
export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    })
  }
}
export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  }
}
