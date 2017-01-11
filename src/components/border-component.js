import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import Slider from 'rc-slider'
import {observer} from 'mobx-react'
import Highlight from 'react-highlight'

import borderStore from '../stores/border-store'

@observer
export default class BorderComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div onClick={() => store.changeColor('red')}>
                {store.color}
                <Highlight className="css">
                    {`
.my-name {
    background: '#efe00e',
    border-left: 5,
    border-right: 0,
    border-radius: 3
}
                    `}
                </Highlight>
            </div>
        )
    }
}
