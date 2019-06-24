import React from 'react'
import Menu from './components/Menu/Menu'

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
      <div id="reactcontainer">
        you contained app goes here
      </div>
    </div>
  }
}

export default App
