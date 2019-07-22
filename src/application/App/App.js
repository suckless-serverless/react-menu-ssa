import React from 'react'
import Menu from './components/Menu/Menu'
import properties from '../properties'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Number of clicks',
      number: 0
    }
  }
  render () {
    return <div>
      <Menu nav={this.props.nav }/>
      <div id={properties.containerId}>
        you contained app goes here
      </div>
    </div>
  }
}

export default App
