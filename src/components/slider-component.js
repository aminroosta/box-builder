import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'
import Slider from 'rc-slider'

@observer
export default class SliderComponent extends Component {
    defaultValue = null;
    render() {
        const {title, onChange, min = 0, max=100, defaultValue = 50} = this.props
        this.defaultValue = this.defaultValue === null ? defaultValue : this.defaultValue

        return (
            <div style={styles.container}>
                <div style={styles.subcontainer}>
                    <div style={styles.title}>{title}</div>
                    <Slider defaultValue={this.defaultValue} min={min} max={max}
                            onChange={onChange} />
                </div>
                <div style={styles.underline} />
            </div>
        )
    }
}

const height = 45
const styles = {
    container: {
        background: colors.white,
        height: height,
        display: 'flex',
        flexFlow: 'row wrap',
        padding: `7px ${sizes.padding}px 0 10px`,
        boxSizing: 'border-box',
    },
    subcontainer: {
        width: '100%',
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: '43%',
        fontSize: sizes.small,
        textAlign: 'left',
    },
    slider: {
        width: '57%',
    },
    underline: {
        borderBottom: `1px solid ${colors.dark}`,
        alignSelf: 'flex-end',
        width: '100%'
    }
}