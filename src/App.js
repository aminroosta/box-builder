import React, { Component } from 'react'
import BorderComponent from './components/border-component'

import borderStore from './stores/border-store'

export default class App extends Component {
  render() {
    return (
      <div>
        <BorderComponent store={borderStore} />
      </div>
    )
  }
}
