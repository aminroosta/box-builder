import React, { Component } from 'react'

import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

import SearchIcon from './assets/search-icon'
import {DESIGN_ROUTE, GALLERY_ROUTE, SEARCH_ROUTE} from '../constants/routes'



@observer
export default class TabbarComponent extends Component {
    render() {
        const {route, setRoute} = this.props;
        const design_bg = route === DESIGN_ROUTE ? colors.red : 'transparent'
        const gallery_bg = route !== DESIGN_ROUTE ? colors.red : 'transparent'
        return (
            <div style={styles.container}>
                <div style={styles.tabs}>
                    <div style={{...styles.tab, ...styles.title}}>My JS Test</div>
                    <div style={{...styles.tab, ...styles.title}}><SearchIcon onClick={() => setRoute(SEARCH_ROUTE)} /></div>
                    <div style={styles.tab} onClick={() => setRoute(DESIGN_ROUTE)}>Design</div>
                    <div style={styles.tab} onClick={() => setRoute(GALLERY_ROUTE)}>Category</div>
                    <div style={{...styles.underline, background: design_bg}}></div>
                    <div style={{...styles.underline, background: gallery_bg}}></div>
                </div>
            </div>
        )
    }
}

const height = 120;
const styles = {
    container: {
        background: colors.darker,
        width: '100%',
        height: height,
        paddingTop: '20px',
        boxSizing: 'border-box',
    },
    tabs: {
        margin: '0 auto',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '412px',
    },
    tab: {
        color: colors.white,
        width: '50%',
        textAlign: 'center',
        fontSize: sizes.medium
    },
    title: {
        height: height*.6,
        fontSize: sizes.big
    },
    underline: {
        height: '3px',
        width: '50%',
        alignSelf: 'flex-end'
    }

}