import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'
import SearchIcon from './assets/search-icon'



@observer
export default class TabbarComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.container}>
                <div style={styles.tabs}>
                    <div style={{...styles.tab, ...styles.title}}>My Store</div>
                    <div style={{...styles.tab, ...styles.title}}><SearchIcon /></div>
                    <div style={styles.tab}>Design</div>
                    <div style={styles.tab}>Category</div>
                    <div style={{...styles.underline, background: colors.red}}></div>
                    <div style={styles.underline}></div>
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
        boxSizing: 'border-box'
    },
    tabs: {
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