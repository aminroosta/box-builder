import React, { Component } from 'react'
import {observer} from 'mobx-react'

import {colors, sizes} from './constants/theme'
import {DESIGN_ROUTE, GALLERY_ROUTE, SEARCH_ROUTE} from './constants/routes'

import TabbarComponent from './components/tabbar-component'
import ColorPickerComponent from './components/colorpicker-component'
import ItemContainer from './containers/item-container'
import ItemComponent from './components/item-component'

import DivComponent from './components/div-component'
import DesignerComponent from './components/designer-component'

@observer
export default class App extends Component {
  render() {
    const {store} = this.props;
    let content = null;

    if(store.route === DESIGN_ROUTE) {
      content = (
        <div style={styles.design}>
          <div style={styles.inner}>
            <DesignerComponent store={store.design} />
          </div>
          <div style={styles.inner}>
            <DivComponent {...store.design} />
          </div>
        </div>
      )
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

const styles = {
  design: {
    margin: '0 auto',
    width: '100%',
    maxWidth: sizes.destop_width,
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  inner: {
    display: 'inline-block',
    margin: '0 auto',
    width: '100%',
    maxWidth: sizes.destop_width/2,
    verticalAlign: 'top',
  }
}