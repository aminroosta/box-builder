import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import Slider from 'rc-slider'


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Slider tipTransitionName="rc-slider-tooltip-zoom-down" onChange={value => this.log(value)} />
      </div>
    )
        //<SketchPicker />
  }
  log(value) {
    console.warn(value)
  }
}
