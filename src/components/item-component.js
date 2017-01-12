import React, { Component } from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

import Highlight from 'react-highlight'

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

        let UpDownIcon = null;
        if(!this.state.showDetails) {
            UpDownIcon = <UpIcon onClick={() => this.state.showDetails = true} />
        } else {
            UpDownIcon = <DownIcon onClick={() => this.state.showDetails = false} />
        }
        
        let HighlightCss = null;
        if(this.state.showDetails) {
            console.warn(JSON.stringify(store))
            HighlightCss = (
                <div style={{textAlign: 'left'}}>
                    <Highlight className="css">{store.asCss}</Highlight>
                </div>
            )
        }

        let styleCaption = {...styles.caption, flexGrow:(this.state.showDetails ? 1 : 0)}

        return (
            <div style={styles.container}>
                <div style={styleCaption}>
                    <div style={styles.name}>{store.name}</div>
                    {HighlightCss}
                    <div>
                        <div style={styles.stars}>
                            <Ratings rate={store.star} updateStars={v => store.star = v}/>
                        </div>
                        <div style={styles.up}>
                            {UpDownIcon}
                        </div>
                    </div>
                </div>
                { Div }
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
        flexDirection: 'column-reverse',
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
        flexGrow: 0,
        background: colors.dark,
        boxSizing: 'border-box',
        padding: sizes.padding,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: colors.white,
        transition: 'all .5s'
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