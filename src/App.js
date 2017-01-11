import React, { Component } from 'react'
import BorderComponent from './components/border-component'

import borderStore from './stores/border-store'
import TabbarComponent from './components/tabbar-component'
import SliderComponent from './components/slider-component'
import ColorPickerComponent from './components/colorpicker-component'
import BottomComponent from './components/bottom-component'
import ItemContainer from './containers/item-container'
import ItemComponent from './components/item-component'

export default class App extends Component {
  render() {
    return (
      <div>
        <TabbarComponent />
        <SliderComponent />
        <SliderComponent />
        <ColorPickerComponent />
        <BottomComponent />
        <ItemContainer>
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
        </ItemContainer>
      </div>
    )
  }
}
