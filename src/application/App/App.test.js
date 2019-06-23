import React from 'react'
import renderer from 'react-test-renderer'
import App from './App.js'

describe('MessageList.test.js', () => {
  let app
  beforeEach(() => {
    app = renderer
      .create(<App />)
  })
  it('renders correctly', () => {
    const tree = app.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('clicks event', () => {
    let tree = app.toJSON()
    // manually trigger the callback
    tree.children[1].props.onClick()
    // re-rendering
    tree = app.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
