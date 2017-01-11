import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

import DivComponent from './div-component'

import UpIcon from './assets/up-icon'
import Ratings from './assets/ratings'


@observer
export default class ItemComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.container}>
                <div style={styles.div}>
                    <DivComponent {...store} scale={.7} />
                </div>
                <div style={styles.caption}>
                    <div style={styles.name}>{store.name}</div>
                    <div>
                        <div style={styles.stars}>
                            <Ratings rate={store.star} updateStars={v => store.star = v}/>
                        </div>
                        <div style={styles.up}><UpIcon /></div>
                    </div>
                </div>

            </div>
        )
    }
}

const height = 260;
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
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    caption: {
        width: '100%',
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
        textAlign: 'left'
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