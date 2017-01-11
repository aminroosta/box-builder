import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'
import UpIcon from './assets/up-icon'
import Ratings from './assets/ratings'

@observer
export default class ItemComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.container}>
                <div style={styles.div}></div>
                <div style={styles.caption}>
                    <div style={styles.name}>my name here</div>
                    <div>
                        <div style={styles.stars}><Ratings/></div>
                        <div style={styles.up}><UpIcon /></div>
                    </div>
                </div>

            </div>
        )
    }
}

const height = 280;
const styles = {
    container: {
        margin: sizes.small_padding,
        height: height,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,0.25)'
    },
    div: {
        background: colors.white,
        width: '100%',
        flexGrow: 10,
    },
    caption: {
        width: '100%',
        flexGrow: 1,
        background: colors.dark,
        boxSizing: 'border-box',
        padding: sizes.padding,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: colors.white
    },
    name: {
        fontSize: sizes.small,
    },
    stars: {
        display: 'inline-block',
        width: '80%',
        textAlign: 'left'
    },
    up: {
        display: 'inline-block',
        width: '20%',
        textAlign: 'right'
    }

}