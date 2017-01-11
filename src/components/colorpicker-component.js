import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'
import { SliderPicker } from 'react-color'

@observer
export default class ColorPickerComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.container}>
                <div style={styles.subcontainer}>
                    <div style={styles.title}>Title: </div>
                    <div style={styles.slider}>
                        <SliderPicker color={{ r: '241', g: '112', b: '19', a: '1', }}
                                    onChange={value => console.warn(value) } />
                    </div>
                </div>
                <div style={styles.underline} />
            </div>
        )
    }
}

const height = 70;
const styles = {
    container: {
        background: colors.white,
        height: height,
        padding: '7px 10px 0 10px',
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
        width: '23%',
        display: 'inline-block',
        fontSize: sizes.medium,
        lineHeight: '47px'
    },
    slider: { // SliderPicker doesn't like flexbox!
        position: 'absolute',
        left: '23%',
        width: '77%',
        display: 'inline-block'
    },
    underline: {
        position: 'absolute',
        borderBottom: `1px solid ${colors.dark}`,
        bottom: '0',
        width: 'calc(100% - 20px)'
    }
}