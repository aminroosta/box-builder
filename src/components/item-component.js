import React, { Component } from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

import DivComponent from './div-component'

import UpIcon from './assets/up-icon'
import DownIcon from './assets/down-icon'
import Ratings from './assets/ratings'

class ItemComponentState {
    @observable showDetails = false
}


@observer
export default class ItemComponent extends Component {
    state = new ItemComponentState

    render() {
        const {store} = this.props;

        let Div = null;
        if(!this.state.showDetails) {
            Div = <div style={styles.div}>
                        <DivComponent {...store} scale={.7} />
                  </div>
        }
        else {
            Div = <div style={styles.div}>
                  </div>
        }

        let UpDownIcon = null;
        if(!this.state.showDetails) {
            UpDownIcon = <UpIcon onClick={() => this.state.showDetails = true} />
        } else {
            UpDownIcon = <DownIcon onClick={() => this.state.showDetails = false} />
        }

        return (
            <div style={styles.container}>
                { Div }
                <div style={styles.caption}>
                    <div style={styles.name}>{store.name}</div>
                    <div>
                        <div style={styles.stars}>
                            <Ratings rate={store.star} updateStars={v => store.star = v}/>
                        </div>
                        <div style={styles.up}>
                            {UpDownIcon}
                        </div>
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