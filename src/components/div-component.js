import React, { Component } from 'react'

import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'


@observer
export default class DivComponent extends Component {
    render() {
        const {width, height, backgroundColor, radius, shadow} = this.props;
        const style =  {
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: radius,
            boxShadow: shadow.asCss
        }
        return (
            <div style={styles.container}>
                <div style={style}> </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: sizes.max_div_height,
        maxWidth: sizes.destop_width/2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: `1px solid ${colors.dark}`,
        boxSizing: 'border-box'
    }
}