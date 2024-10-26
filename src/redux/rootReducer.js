import { combineReducers } from 'redux'

import { checkboxReducer } from './checkboxReducer'
import { sortReducer } from './sortReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  checkboxReducer,
  sortReducer,
  appReducer,
})
