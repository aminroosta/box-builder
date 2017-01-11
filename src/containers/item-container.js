import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

import ItemComponent from '../components/item-component'

@observer
export default class ItemContainer extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.container}>
            {
                store.gallery.items_filtered.map(item => (
                        <div key={item.key} style={styles.child}>
                            <ItemComponent store={item} />
                        </div>
                    )
                )
            }
            </div>
        )
    }
}

const styles = {
    container: {
        margin: '0 auto',
        width: '100%',
        maxWidth: sizes.destop_width,
        boxSizing: 'border-box',
        textAlign: 'center'
    },
    child: {
        display: 'inline-block',
        margin: '0 auto',
        width: '50%',
        maxWidth: sizes.destop_width/4,
        verticalAlign: 'top',
    }
}