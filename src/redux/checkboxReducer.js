import uniqid from 'uniqid'

import { CHECK, FLIGHT_ID_LOAD, FLIGHTS_LOAD } from './types'
// import uniqid from 'uniqid'
const initialState = {
  checkbox: {
    allChecked: false,
    withoutTransfers: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfer: false,
  },
}
export const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK:
      console.log(state, action)
      return {
        ...state,
        checkbox: { ...state.checkbox, ...action.checkbox },
      }
    default:
      return state
  }
}
