import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.click = this.click.bind(this)
    this.state = {
      name: 'Number of clicks',
      number: 0
    }
  }
  click () {
    let { number } = this.state
    number++
    this.setState({ number })
  }
  render () {
    return <div>
      <img src="https://www.cybelesoft.com/wp-content/uploads/2017/08/reactlogo2-150x150.png" alt=""/>
      <button onClick={this.click}>Click Me</button>
      { this.state.name } =&gt;  { this.state.number }
      <div id="reactcontainer">
        you contained app goes here
      </div>
    </div>
  }
}

export default App
