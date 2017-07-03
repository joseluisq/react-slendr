import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  Slendr,
  SlendrDirection,
  SlendrDirectionPrev,
  SlendrDirectionNext
} from '../src'

class App extends Component {
  render () {
    return (
      <Slendr>
        <SlendrDirection>
          <SlendrDirectionPrev>
            <i class='fa fa-angle-left' />
          </SlendrDirectionPrev>
          <SlendrDirectionNext>
            <i class='fa fa-angle-right' />
          </SlendrDirectionNext>
        </SlendrDirection>
      </Slendr>
    )
  }
}

render(<App />, document.getElementById('root'))
