import React from 'react'
import styles from './styles.css'
import { burger, icon } from './images'

export default class Menu extends React.Component {
  constructor (props) {
    super(props)
    const { hash } = document.location
    let selected = props.nav.items.map(item => item.link).indexOf(hash)
    this.state = {
      selected
    }
    this.selected = this.selected.bind(this)
    this.select = this.select.bind(this)
  }
  selected (item) {
    if (this.state.selected === item) return 'active'
  }
  select (item) {
    this.setState({ selected: item })
  }
  items () {
    return this.props.nav.items.map((item, index) => (
      <li onClick={() => this.select(index)} key={'item_' + index} style={{ float: item.position }}><a className={this.selected(index)} href={item.link}>{item.name}</a></li>
    ))
  }
  render () {
    return (
      <>
        <style>{styles.toString()}</style>
        <ul>
          <li className="burger" style={{ float: 'right' }}><img width="20" src={ icon } alt=""/></li>
          <li className="burger"><img width="20" src={ burger } alt=""/></li>
          { this.items() }
        </ul>
      </>
    )
  }
}

Menu.defaultProps = {
  nav: { items: [] }
}
