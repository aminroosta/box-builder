import React, { Component } from 'react'
import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

@observer
export default class ItemComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.container}>
            {
                React.Children.map(this.props.children, child => (
                        <div style={styles.child}>
                            {React.cloneElement(child, {})}
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
        display: 'flex',
        flexFlow: 'row wrap',
        boxSizing: 'border-box',
    },
    child: {
        width: '50%'
    }
}