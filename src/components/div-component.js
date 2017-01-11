import React, { Component } from 'react'

import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'


@observer
export default class DivComponent extends Component {
    render() {
        const {width, height, backgroundColor, radius, shadow, scale = 1} = this.props;
        const shadowCss = shadow.asCss;
        if(scale != 1) {
            //shadowCss = `${shadow.x*scale}px ${shadow.y*scale}px ${shadow.blur*scale}px ${this.color}`
        }
        const style =  {
            width: width*scale,
            height: height*scale,
            backgroundColor: backgroundColor,
            borderRadius: radius*scale,
            boxShadow: shadowCss
        }
        return (
                <div style={style}> </div>
        )
    }
}