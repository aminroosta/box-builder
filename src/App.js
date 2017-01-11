import React, { Component } from 'react'
import {observer} from 'mobx-react'

import {DESIGN_ROUTE, GALLERY_ROUTE, SEARCH_ROUTE} from './constants/routes'

import TabbarComponent from './components/tabbar-component'
import SliderComponent from './components/slider-component'
import ColorPickerComponent from './components/colorpicker-component'
import BottomComponent from './components/bottom-component'
import ItemContainer from './containers/item-container'
import ItemComponent from './components/item-component'

@observer
export default class App extends Component {
  render() {
    const {store} = this.props;
    let content = null;

    if(store.route === DESIGN_ROUTE) {
      content =  <SliderComponent />
    }
    if(store.route === GALLERY_ROUTE) {
      content =  <ColorPickerComponent />
    }

    return (
      <div>
        <TabbarComponent route={store.route} setRoute={store.setRoute} />
        {content}
      </div>
    )
  }
}
