/* eslint-disable sort-keys, sort-imports */
import React from 'react'
import ReactDOM from 'react-dom'

import ReduxThunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import mongoose from 'mongoose'
import { Db, Server } from 'mongodb'

import './seeds'

import reducers from './reducers'
import Routes from './router'

mongoose.Promise = Promise

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

const DEFAULT_PORT = 27017
const db = new Db('upstar_music', new Server('localhost', DEFAULT_PORT))

db.open().then(() => {
  window.db = db
  mongoose.connect('mongodb://localhost/upstar_music', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection
    .once('open', () => {
      ReactDOM.render(<App />, document.getElementById('root'))
    })
    .on('error', error => {
      console.warn('Warning', error)
    })
})
