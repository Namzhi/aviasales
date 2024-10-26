import { CHECK } from './types'
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
      return {
        ...state,
        checkbox: { ...state.checkbox, ...action.checkbox },
      }
    default:
      return state
  }
}
