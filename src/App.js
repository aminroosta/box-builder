import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system' 
import {observer} from 'mobx-react'
import notification from './notification'

import {DESIGN_ROUTE, GALLERY_ROUTE, SEARCH_ROUTE} from './constants/routes'

import TabbarComponent from './components/tabbar-component'
import DesignContainer from './containers/design-container'

import ColorPickerComponent from './components/colorpicker-component'
import ItemContainer from './containers/item-container'
import ItemComponent from './components/item-component'


@observer
export default class App extends Component {
  _designerContainer = null
  render() {
    const {store} = this.props;
    let content = null;

    if(store.route === DESIGN_ROUTE) {
      content = this._designerContainer || <DesignContainer store={store} />
      this._designerContainer = content
    }
    if(store.route === GALLERY_ROUTE) {
      content =  <ColorPickerComponent />
    }

    return (
      <div>
        <TabbarComponent route={store.route} setRoute={store.setRoute} />
        {content}
        <NotificationSystem ref="notificationSystem" />
      </div>
    )
  }
  componentDidMount() {
    /* setup notification system */
    notification.setup(this.refs.notificationSystem)
  }
}
