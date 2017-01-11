import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import Slider from 'rc-slider'
import {observer} from 'mobx-react'

import borderStore from '../stores/border-store'

@observer
export default class BorderComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div onClick={() => store.changeColor('red')}>
                {store.color}
            </div>
        )
    }
}
