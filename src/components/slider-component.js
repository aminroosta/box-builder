import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'
import Slider from 'rc-slider'

@observer
export default class SliderComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.container}>
                <div style={styles.subcontainer}>
                    <div style={styles.title}>Title: </div>
                    <Slider defaultValue={50} min={0} max={100}
                            onChange={value => console.warn(value) } />
                </div>
                <div style={styles.underline} />
            </div>
        )
    }
}

const height = 50;
const styles = {
    container: {
        background: colors.white,
        height: height,
        display: 'flex',
        flexFlow: 'row wrap',
        padding: `7px ${sizes.padding} 0 10px`,
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
        width: '30%',
        fontSize: sizes.medium
    },
    slider: {
        width: '60%',
    },
    underline: {
        borderBottom: `1px solid ${colors.dark}`,
        alignSelf: 'flex-end',
        width: '100%'
    }
}