import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

@observer
export default class BottomComponent extends Component {
    render() {
        const {onClick} = this.props;
        return (
            <div style={styles.container} onClick={onClick}>
                <div style={styles.text}>
                    Save to Gallary
                </div>
            </div>
        )
    }
}

const height = 60;
const styles = {
    container: {
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        background: colors.red,
        margin: sizes.padding,
        borderRadius: 6,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,0.25)'
    },
    text: {
        fontSize: sizes.medium,
        fontWieght: 'bold',
        color: colors.white
    }
}
/* button: */