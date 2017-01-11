import React, { Component } from 'react'
import BorderComponent from './components/border-component'

import borderStore from './stores/border-store'
import TabbarComponent from './components/tabbar-component'
import SliderComponent from './components/slider-component'

export default class App extends Component {
  render() {
    return (
      <div>
        <TabbarComponent />
        <SliderComponent />
        <SliderComponent />
        <BorderComponent store={borderStore} />
      </div>
    )
  }
}
