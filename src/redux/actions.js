import { CHECK, FLIGHTS_LOAD, FLIGHT_ID_LOAD } from './types'

export function check(checkbox) {
  // console.log(143432)
  // console.log(checkbox)
  return {
    type: CHECK,
    // id: null,
    checkbox,
  }
}
export function flightIdLoad() {
  return async function (dispatch) {
    try {
      const response = await fetch(' https://aviasales-test-api.kata.academy/search')
      const jsonData = await response.json()
      // console.log(143)
      dispatch({
        type: FLIGHT_ID_LOAD,
        id: jsonData.searchId,
      })
    } catch {
      console.log('id error')
    }
  }
}
export function flightsLoad() {
  return async function (dispatch) {
    console.log('flights')
    try {
      console.log(999)
      const responseId = await fetch('https://aviasales-test-api.kata.academy/search')
      const jsonDataId = await responseId.json()
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${jsonDataId.searchId}`)
      const jsonData = await response.json()
      dispatch({
        type: FLIGHTS_LOAD,
        flights: jsonData,
      })
    } catch {
      console.log('flights error')
    }
  }
}
// const response = await fetch(' https://aviasales-test-api.kata.academy/search')
// const jsonData = await response.json()
// return dispatch({
//   type: FLIGHTS_LOAD,
//   data: jsonData,
// })

// return async (dispatch) => {
//   const response = await fetch(' https://aviasales-test-api.kata.academy/search')
//   const jsonData = await response.json()
//   console.log(143)
//   dispatch({
//     type: FLIGHTS_LOAD,
//     data: jsonData,
//   })
// }
// console.log(14388888)
// return async (dispatch) => {
//   try {
//     const response = await fetch(' https://aviasales-test-api.kata.academy/search')
//     const jsonData = await response.json()
//     console.log(143)
//     dispatch({
//       type: FLIGHTS_LOAD,
//       data: jsonData,
//     })
//   } catch {
//     console.log('error')
//   }
// }
