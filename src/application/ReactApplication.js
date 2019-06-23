import React from 'react'
import ReactDOM from 'react-dom'
import { Application } from 'suckless-serverless'
import { App } from './App'

export default class ReactApplication extends Application {
  handle (root) {
    ReactDOM.render(<App />, document.getElementById(root))
  }
}
