import React from 'react'
import { render } from 'react-dom'
import { Application } from 'suckless-serverless'
import { App } from './App'
import properties from './properties'

export default class ReactApplication extends Application {
  constructor (aProps) {
    const props = { ...properties, ...aProps }
    super(props)
    this.nav = props.nav
  }
  handle (root) {
    render(<App nav={this.nav} />, document.getElementById(root))
  }
}
