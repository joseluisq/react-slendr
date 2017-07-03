import React, { Component } from 'react'

export default class SlendrDirection extends Component {
  render () {
    return (
      <nav className='slendr-direction'>
        {this.props.children}
      </nav>
    )
  }
}
