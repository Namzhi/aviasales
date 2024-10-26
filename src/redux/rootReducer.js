import { combineReducers } from 'redux'

import { checkboxReducer } from './checkboxReducer'

export const rootReducer = combineReducers({
  checkboxReducer,
})
