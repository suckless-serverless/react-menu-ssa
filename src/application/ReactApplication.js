import React from 'react'
import ReactDOM from 'react-dom'
import { Application } from 'suckless-serverless'
import { App } from './App'
import properties from './properties'

export default class ReactApplication extends Application {
  constructor (aProps) {
    const props = (aProps) || properties
    super(props)
    this.nav = props.nav
  }
  handle (root) {
    ReactDOM.render(<App nav={this.nav} />, document.getElementById(root))
  }
}
