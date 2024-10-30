import React from 'react'
import ReactDOM from 'react-dom/client'
import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import { rootReducer } from './redux/rootReducer'
import './variables.scss'
import './mixins.scss'
import AppBase from '././App-base/index.js'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <AppBase />
  </Provider>
)
