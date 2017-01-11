import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'
import { SliderPicker } from 'react-color'

@observer
export default class ColorPickerComponent extends Component {
    render() {
        const {title, onChange} = this.props;

        return (
            <div style={styles.container}>
                <div style={styles.subcontainer}>
                    <div style={styles.title}>{title}</div>
                    <div style={styles.slider}>
                        <SliderPicker color={colors.red}
                                      onChange={v => onChange(v.hex)} />
                    </div>
                </div>
                <div style={styles.underline} />
            </div>
        )
    }
}

const height = 60;
const styles = {
    container: {
        background: colors.white,
        height: height,
        padding: '3px 10px 0 10px',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative'
    },
    subcontainer: {
        width: '100%',
        position: 'relative',
        top: '5px'
    },
    title: {
        position: 'absolute',
        width: '30%',
        left: 0,
        textAlign: 'left',
        display: 'inline-block',
        fontSize: sizes.small,
        lineHeight: '47px'
    },
    slider: { // SliderPicker doesn't like flexbox!
        position: 'absolute',
        left: '30%',
        width: '70%',
        display: 'inline-block'
    },
    underline: {
        position: 'absolute',
        borderBottom: `1px solid ${colors.dark}`,
        bottom: '0',
        width: 'calc(100% - 20px)'
    }
}