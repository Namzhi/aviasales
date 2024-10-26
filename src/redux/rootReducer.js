import { combineReducers } from 'redux'

import { checkboxReducer } from './checkboxReducer'
import { sortReducer } from './sortReducer'

export const rootReducer = combineReducers({
  checkboxReducer,
  sortReducer,
})
